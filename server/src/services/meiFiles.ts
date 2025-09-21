import type { MeiJsonData, TitleData } from "@mei-cat/mei-schema-valibot";
import {
	getMeiXmlVersion,
	meiXmlTo51,
	meiXmlToJson,
} from "@mei-cat/mei-transformer";
import type { BunFile } from "bun";
import { eq } from "drizzle-orm";
import Elysia from "elysia";
import { StatusCodes } from "http-status-codes";
import { db } from "../db";
import type { MeiFileSelect } from "../db/models";
import {
	fileDesc,
	meiFiles,
	person,
	pubStmt,
	respStmt,
	respStmtLikeEnum,
	title,
	titleStmt,
} from "../db/schema";
import { env } from "../env";
import {
	APIAlreadyExistsError,
	APIError,
	APIFileDownloadError,
	APIInvalidContentTypeError,
	APINotFoundError,
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
		delete: (meiFile: MeiFileSelect) => {
			return MeiFile.delete(meiFile);
		},
		deleteBatch: (ids: string[]) => {
			return MeiFile.deleteBatch(ids);
		},
		reimport: (id: string) => {
			return MeiFile.reimport(id);
		},
		reimportBatch: (ids: string[]) => {
			return MeiFile.reimportBatch(ids);
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
				throw new APIFileDownloadError("Failed to download MEI file");
			const contentType = response.headers.get("content-type");
			if (
				!contentType?.startsWith("application/xml") &&
				!contentType?.startsWith("text/xml")
			)
				throw new APIInvalidContentTypeError(
					"Invalid content type. Expected application/xml or text/xml, but got " +
						contentType,
				);
			const xml = await response.text();
			return new MeiFile(xml);
		} catch (error) {
			if (
				error instanceof Error &&
				(error.name === "AbortError" || error.name === "TimeoutError")
			) {
				throw new APIFileDownloadError("Download timed out");
			}
			if (error instanceof APIError) {
				throw error;
			}
			throw new APIFileDownloadError("Failed to download MEI file", {
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

	/**
	 * Delete the files from the storage and entity from the database.
	 * @param meiFile - The MEI file object.
	 * @returns True if the files and entity were deleted, false otherwise.
	 */
	static async delete(meiFile: MeiFileSelect) {
		try {
			await db.delete(meiFiles).where(eq(meiFiles.id, meiFile.id));
			const storagePath: string = meiFile.storagePath;

			switch (meiFile.storageType) {
				case "local":
					await Bun.file(`${storagePath}/${meiFile.originalFileName}`).delete();
					await Bun.file(
						`${storagePath}/${meiFile.convertedFileName}`,
					).delete();
					break;
				default:
					throw new APIError(
						StatusCodes.NOT_IMPLEMENTED,
						`Unsupported storage type: ${meiFile.storageType}`,
					);
			}

			return true;
		} catch (error) {
			console.error("Failed to delete MEI file entity", error);
			return false;
		}
	}

	/**
	 * Delete multiple MEI files by their IDs.
	 * @param ids - Array of MEI file IDs to delete.
	 * @returns Object with success count and any errors that occurred.
	 */
	static async deleteBatch(ids: string[]) {
		const results = {
			successCount: 0,
			errorCount: 0,
			errors: [] as Array<{ id: string; error: string }>,
		};

		// Get all MEI files first to avoid deleting files that don't exist
		const meiFilesToDelete = await db.query.meiFiles.findMany({
			where: (meiFiles, { inArray }) => inArray(meiFiles.id, ids),
		});

		// Track which IDs were found
		const foundIds = new Set(meiFilesToDelete.map((file) => file.id));

		// Add errors for IDs that don't exist
		for (const id of ids) {
			if (!foundIds.has(id)) {
				results.errors.push({ id, error: "MEI file not found" });
				results.errorCount++;
			}
		}

		// Delete each MEI file
		for (const meiFile of meiFilesToDelete) {
			try {
				await MeiFile.delete(meiFile);
				results.successCount++;
			} catch (error) {
				const errorMessage =
					error instanceof Error ? error.message : "Unknown error";
				results.errors.push({ id: meiFile.id, error: errorMessage });
				results.errorCount++;
			}
		}

		return results;
	}

	/**
	 * Reimport a MEI file by ID - deletes connected data and re-imports.
	 * @param id - The ID of the MEI file to reimport.
	 * @returns The updated MEI file object.
	 */
	static async reimport(id: string) {
		// Get the MEI file from database
		const meiFile = await db.query.meiFiles.findFirst({
			where: (meiFiles, { eq }) => eq(meiFiles.id, id),
		});

		if (!meiFile) {
			throw new APINotFoundError("MEI file not found");
		}

		// Read the original XML file
		const originalFilePath = `${meiFile.storagePath}/${meiFile.originalFileName}`;
		const originalFile = Bun.file(originalFilePath);
		if (!originalFile.exists()) {
			throw new APINotFoundError("Original MEI file not found");
		}
		const originalXml = await originalFile.text();

		// Create a new MeiFile instance from the original XML
		const meiFileInstance = new MeiFile(originalXml);

		// Delete connected data (fileDesc and its children) but keep the meiFiles entity
		await db.delete(fileDesc).where(eq(fileDesc.fileId, id));

		// Re-import the data using fillDB
		const updatedFile = await meiFileInstance.fillDB(true);

		return updatedFile;
	}

	/**
	 * Reimport multiple MEI files by their IDs.
	 * @param ids - Array of MEI file IDs to reimport.
	 * @returns Object with success count and any errors that occurred.
	 */
	static async reimportBatch(ids: string[]) {
		const results = {
			successCount: 0,
			errorCount: 0,
			errors: [] as Array<{ id: string; error: string }>,
		};

		// Get all MEI files first to avoid processing files that don't exist
		const meiFilesToReimport = await db.query.meiFiles.findMany({
			where: (meiFiles, { inArray }) => inArray(meiFiles.id, ids),
		});

		// Track which IDs were found
		const foundIds = new Set(meiFilesToReimport.map((file) => file.id));

		// Add errors for IDs that don't exist
		for (const id of ids) {
			if (!foundIds.has(id)) {
				results.errors.push({ id, error: "MEI file not found" });
				results.errorCount++;
			}
		}

		// Reimport each MEI file
		for (const meiFile of meiFilesToReimport) {
			try {
				await MeiFile.reimport(meiFile.id);
				results.successCount++;
			} catch (error) {
				const errorMessage =
					error instanceof Error ? error.message : "Unknown error";
				results.errors.push({ id: meiFile.id, error: errorMessage });
				results.errorCount++;
			}
		}

		return results;
	}

	/** The original MEI XML version. */
	public readonly version: string;

	/** The converted MEI 5.1 XML as string. */
	#convertedMei51: string | null = null;
	/** The converted MEI JSON as object. */
	// @ts-expect-error - Too complex type.
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
		if (!this.#convertedMei51)
			throw new APIError(
				StatusCodes.INTERNAL_SERVER_ERROR,
				"MEI 5.1 XML not converted",
			);
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
				throw new APIError(
					StatusCodes.NOT_IMPLEMENTED,
					`Unsupported storage type: ${env.STORAGE_TYPE}`,
				);
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
					throw new APIError(
						StatusCodes.NOT_IMPLEMENTED,
						`Unsupported storage type: ${env.STORAGE_TYPE}`,
					);
			}
		} catch (error) {
			console.error("Failed to delete MEI file", error);
			return false;
		}
		return true;
	}

	/** Fill the database with the MEI file data */
	async fillDB(isReimport: boolean = false) {
		// Convert the MEI file to JSON to fill all fields.
		// Need to be done before saving the files to the database.
		await this.json;

		// Check if file already exists in the DB by hash
		const existingFile = await db.query.meiFiles.findFirst({
			where: (file, { eq }) => eq(file.hash, this.hash),
		});
		if (existingFile && !isReimport) {
			throw new APIAlreadyExistsError("MEI file already exists in the DB");
		}
		if (!existingFile && isReimport) {
			throw new APINotFoundError("MEI file not found in the DB");
		}
		if (isReimport) {
			await this.fillFileDesc(existingFile!);
			return existingFile!;
		}
		try {
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

		console.log(`Writing fileDesc to database for file ${file.id}`);
		const [fileDescItem] = await db
			.insert(fileDesc)
			.values({ fileId: file.id })
			.returning();

		const titleStmtElement = fileDescElement.titleStmt;

		console.log(
			`Writing titleStmt to database for file ${file.id} and fileDesc ${fileDescItem.id}`,
		);
		const [titleStmtItem] = await db
			.insert(titleStmt)
			.values({ fileDescId: fileDescItem.id })
			.returning();

		if (!titleStmtElement.title)
			throw new APINotFoundError("Title element not found");
		const titleElements: TitleData[] = Array.isArray(titleStmtElement.title)
			? titleStmtElement.title
			: [titleStmtElement.title];
		console.log(
			`Writing ${titleElements.length} titles to database for file ${file.id} and titleStmt ${titleStmtItem.id}`,
		);
		for (const titleElement of titleElements) {
			if (!titleElement["#text"])
				throw new APINotFoundError("Title element text not found");
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

		// Fill the pubStmt table with the MEI file data.
		const pubStmtElement = fileDescElement.pubStmt;
		if (pubStmtElement) {
			const pubStmtElements = Array.isArray(pubStmtElement)
				? pubStmtElement
				: [pubStmtElement];
			for (const pubStmtElement of pubStmtElements) {
				// If the pubStmt element has an unpub element, set the isUnpub flag to true.
				if (pubStmtElement.unpub) {
					await db.insert(pubStmt).values({
						fileDescId: fileDescItem.id,
						isUnpub: true,
					});
					continue;
				}

				const date = pubStmtElement.date?.["#text"] ?? null;
				const respStmtElements = pubStmtElement.respStmt;
				const respStmtElementsArray = Array.isArray(respStmtElements)
					? respStmtElements
					: [respStmtElements];
				for (const respStmtElement of respStmtElementsArray) {
					const [pubStmtItem] = await db
						.insert(pubStmt)
						.values({
							fileDescId: fileDescItem.id,
							date,
							company: respStmtElement.corpName ?? null,
						})
						.returning();

					const personElement = respStmtElement.persName;
					const personElements = Array.isArray(personElement)
						? personElement
						: [personElement];
					for (const personElement of personElements) {
						if (!personElement["#text"] || !personElement["@role"]) continue;
						await db
							.insert(person)
							.values({
								pubStmtId: pubStmtItem.id,
								name: personElement["#text"],
								role: personElement["@role"],
							})
							.returning();
					}
				}
			}
		}
	}
}
