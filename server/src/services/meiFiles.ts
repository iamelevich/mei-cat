import type { MeiJsonData, TitleData } from "@mei-cat/mei-schema-valibot";
import {
	getMeiXmlVersion,
	meiXmlTo51,
	meiXmlToJson,
} from "@mei-cat/mei-transformer";
import type { BunFile } from "bun";
import Elysia from "elysia";
import { db } from "../db";
import type { MeiFileSelect } from "../db/models";
import {
	fileDesc,
	meiFiles,
	respStmt,
	respStmtLikeEnum,
	title,
	titleStmt,
} from "../db/schema";
import { env } from "../env";
import {
	MeiFileDownloadError,
	MeiFileInvalidContentTypeError,
} from "../shared/errors";

export type MeiFileFromURLOptions = {
	timeout: number;
};

export const meiFilesService = new Elysia({ name: "meiFilesService" }).decorate(
	"meiFilesService",
	{
		fromURL: (
			url: string,
			options: MeiFileFromURLOptions = { timeout: 5000 },
		) => {
			return MeiFile.fromURL(url, options);
		},
		fromFile: (file: BunFile) => {
			return MeiFile.fromFile(file);
		},
		fromText: (text: string) => {
			return MeiFile.fromText(text);
		},
	},
);

/**
 * A MEI file. Wrapper that simplifies the MEI XML and JSON conversion.
 */
export class MeiFile {
	/**
	 * Download a MEI file from a URL and convert it to a MeiFile object.
	 * @param url - The URL of the MEI file to download.
	 * @param options - Options for the download.
	 * @param options.timeout - The timeout for the download in milliseconds.
	 * @returns A MeiFile object.
	 */
	static async fromURL(url: string, options: MeiFileFromURLOptions) {
		try {
			const response = await fetch(url, {
				signal: AbortSignal.timeout(options.timeout),
			});
			if (!response.ok)
				throw new MeiFileDownloadError("Failed to download MEI file");
			if (response.headers.get("content-type") !== "application/xml")
				throw new MeiFileInvalidContentTypeError(
					"Invalid content type. Expected application/xml, but got " +
						response.headers.get("content-type"),
				);
			const xml = await response.text();
			return new MeiFile(xml);
		} catch (error) {
			if (
				error instanceof Error &&
				(error.name === "AbortError" || error.name === "TimeoutError")
			) {
				throw new MeiFileDownloadError("Download timed out");
			}
			if (error instanceof MeiFileInvalidContentTypeError) {
				throw error;
			}
			throw new MeiFileDownloadError("Failed to download MEI file", {
				cause: error,
			});
		}
	}

	/**
	 * Create a MeiFile object from a File object.
	 * @param file - The File object.
	 * @returns A MeiFile object.
	 */
	static async fromFile(file: BunFile) {
		const xml = await file.text();
		return new MeiFile(xml);
	}

	/**
	 * Create a MeiFile object from a text string.
	 * @param text - The text string.
	 * @returns A MeiFile object.
	 */
	static async fromText(text: string) {
		return new MeiFile(text);
	}

	/** The original MEI XML version. */
	public readonly version: string;

	/** The converted MEI 5.1 XML as string. */
	#convertedMei51: string | null = null;
	/** The converted MEI JSON as object. */
	// @ts-expect-error - MeiJsonData is too deep
	#convertedJson: MeiJsonData | null = null;
	/** The id of the MEI file. */
	#hash: string | null = null;

	/**
	 * @param xml - MEI XML as string
	 */
	constructor(private xml: string) {
		this.version = getMeiXmlVersion(xml);
	}

	/**
	 * The converted MEI 5.1 XML as string.
	 */
	get mei51(): Promise<string> {
		if (this.#convertedMei51) return Promise.resolve(this.#convertedMei51);
		return meiXmlTo51(this.xml).then((xml) => {
			this.#convertedMei51 = xml;
			return xml;
		});
	}

	/**
	 * The converted MEI JSON as object.
	 */
	get json(): Promise<MeiJsonData> {
		if (this.#convertedJson) return Promise.resolve(this.#convertedJson);
		return this.mei51.then((xml) => {
			this.#convertedJson = meiXmlToJson(xml);
			return this.#convertedJson;
		});
	}

	/**
	 * The hash of the MEI 5.1 XML.
	 */
	get hash(): string {
		if (this.#hash) return this.#hash;
		if (!this.#convertedMei51) throw new Error("MEI 5.1 XML not converted");
		this.#hash = Bun.hash(this.#convertedMei51).toString(16);
		return this.#hash;
	}

	/**
	 * The MEI XML ID.
	 */
	get id(): string {
		if (this.#convertedJson?.mei["@xml:id"]) {
			return this.#convertedJson.mei["@xml:id"];
		}
		return this.hash;
	}

	/**
	 * Save the MEI file to the storage.
	 */
	async saveFiles() {
		const mei = await this.mei51;
		const id = this.id;
		const originalFileName = `${id}.xml`;
		const convertedFileName = `${id}.mei51.xml`;
		let storagePath: string;

		switch (env.STORAGE_TYPE) {
			case "local":
				storagePath = env.STORAGE_PATH;
				await Bun.write(`${storagePath}/${originalFileName}`, this.xml);
				await Bun.write(`${storagePath}/${convertedFileName}`, mei);
				break;
			default:
				throw new Error(`Unsupported storage type: ${env.STORAGE_TYPE}`);
		}

		return {
			originalFileName,
			convertedFileName,
			storagePath,
			storageType: env.STORAGE_TYPE,
		};
	}

	/**
	 *
	 * @returns True if the files were deleted, false otherwise.
	 */
	async deleteFiles() {
		const id = this.id;
		const originalFileName = `${id}.xml`;
		const convertedFileName = `${id}.mei51.xml`;
		let storagePath: string;

		try {
			switch (env.STORAGE_TYPE) {
				case "local":
					storagePath = env.STORAGE_PATH;
					await Bun.file(`${storagePath}/${originalFileName}`).delete();
					await Bun.file(`${storagePath}/${convertedFileName}`).delete();
					break;
				default:
					throw new Error(`Unsupported storage type: ${env.STORAGE_TYPE}`);
			}
		} catch (error) {
			console.error("Failed to delete MEI file", error);
			return false;
		}
		return true;
	}

	/** Fill the database with the MEI file data */
	async fillDB() {
		try {
			// Convert the MEI file to JSON to fill all fields.
			// Need to be done before saving the files to the database.
			await this.json;

			// Check if file already exists in the DB by hash
			const existingFile = await db.query.meiFiles.findFirst({
				where: (file, { eq }) => eq(file.hash, this.hash),
			});
			if (existingFile) {
				throw new Error("MEI file already exists in the DB");
			}

			const { originalFileName, convertedFileName, storageType, storagePath } =
				await this.saveFiles();
			const [file] = await db
				.insert(meiFiles)
				.values({
					hash: this.hash,
					originalFileName,
					convertedFileName,
					originalMeiVersion: this.version,
					storageType,
					storagePath,
				})
				.returning();

			await this.fillFileDesc(file);

			return file;
		} catch (error) {
			console.error("Failed to fill database with MEI file data", error);
			if (this.#convertedMei51) {
				await this.deleteFiles();
			}
			throw error;
		}
	}

	/**
	 * Fill the fileDesc table with the MEI file data.
	 * @param file - The MEI file object.
	 */
	private async fillFileDesc(file: MeiFileSelect) {
		const json = await this.json;
		const fileDescElement = json.mei.meiHead.fileDesc;

		const [fileDescItem] = await db
			.insert(fileDesc)
			.values({ fileId: file.id })
			.returning();

		const titleStmtElement = fileDescElement.titleStmt;

		const [titleStmtItem] = await db
			.insert(titleStmt)
			.values({ fileDescId: fileDescItem.id })
			.returning();

		if (!titleStmtElement.title) throw new Error("Title element not found");
		const titleElements: TitleData[] = Array.isArray(titleStmtElement.title)
			? titleStmtElement.title
			: [titleStmtElement.title];
		for (const titleElement of titleElements) {
			if (!titleElement["#text"])
				throw new Error("Title element text not found");
			const titleText = titleElement["#text"];
			const language = titleElement["@xml:lang"] ?? null;
			await db
				.insert(title)
				.values({ titleStmtId: titleStmtItem.id, title: titleText, language })
				.returning();
		}

		// Fill the respStmt table with the MEI file data.
		for (const respStmtLikeEnumValue of respStmtLikeEnum.enumValues) {
			const respStmtElement = titleStmtElement[respStmtLikeEnumValue];
			if (!respStmtElement) continue;
			const respStmtElements = Array.isArray(respStmtElement)
				? respStmtElement
				: [respStmtElement];
			for (const respStmtElement of respStmtElements) {
				await db
					.insert(respStmt)
					.values({
						titleStmtId: titleStmtItem.id,
						type: respStmtLikeEnumValue,
						data: respStmtElement,
					})
					.returning();
			}
		}
	}
}
