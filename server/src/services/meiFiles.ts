import { join } from "node:path";
import {
	type MeiJSON,
	getMeiXmlVersion,
	meiXmlTo51,
	meiXmlToJson,
} from "@mei-cat/mei-transformer";
import Elysia from "elysia";
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

	/** The original MEI XML version. */
	public readonly version: string;

	/** The converted MEI 5.1 XML as string. */
	#convertedMei51: string | null = null;
	/** The converted MEI JSON as object. */
	#convertedJson: MeiJSON | null = null;

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
	get json(): Promise<MeiJSON> {
		if (this.#convertedJson) return Promise.resolve(this.#convertedJson);
		return this.mei51.then((xml) => {
			this.#convertedJson = meiXmlToJson(xml);
			return this.#convertedJson;
		});
	}

	/**
	 * The MEI XML ID.
	 */
	get id() {
		if (!this.#convertedJson) throw new Error("MEI JSON not converted");
		const id = this.#convertedJson.mei["@xml:id"];
		if (!id) throw new Error("MEI XML ID not found");
		return id;
	}

	/**
	 * Save the MEI file to the storage.
	 */
	async save() {
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
}
