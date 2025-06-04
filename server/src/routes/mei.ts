import Elysia, { t } from "elysia";
import { db } from "../db";
import { meiFiles } from "../db/schema";
import { meiFilesService } from "../services/meiFiles";
import { MeiFileDownloadError } from "../shared/errors";

const ROUTE_PREFIX = "/mei";

const createMeiFile = t.Object({
	url: t.String({ format: "uri" }),
});

export const meiRoutes = new Elysia({ prefix: ROUTE_PREFIX })
	.use(meiFilesService)
	// List all MEI files
	.get("/", async () => {
		return db.select().from(meiFiles);
	})
	// Get MEI file by id
	.get("/:id", async ({ params, status }) => {
		const file = await db.query.meiFiles.findFirst({
			where: (file, { eq }) => eq(file.id, params.id),
		});
		if (!file) {
			return status(404, {
				error: "MEI file not found",
			});
		}
		return file;
	})
	// Add new MEI file from URL
	.post(
		"/",
		async ({ body, meiFilesService, status }) => {
			try {
				// Download MEI XML from URL
				const meiFile = await meiFilesService.fromURL(body.url);

				// Convert to JSON
				const json = await meiFile.json;

				// Extract metadata from JSON
				// id: json.mei["xml:id"]
				// title: json.mei.meiHead.fileDesc.titleStmt.title (string or first element if array)
				// language: json.mei.meiHead.fileDesc.titleStmt.title["xml:lang"]
				// originalFileName: `${id}.xml`
				// convertedFileName: generated (e.g. `${id}.mei51.xml`)

				const id = meiFile.id;
				let title = "Untitled";
				let language = "und";
				try {
					const mei = json.mei || {};
					const titleNode = mei.meiHead?.fileDesc?.titleStmt?.title;
					title = titleNode["#text"] ?? "Untitled";
					language = titleNode["xml:lang"] ?? "und";
				} catch (error) {
					console.error("Failed to extract metadata from MEI file", error);
				}
				const {
					originalFileName,
					convertedFileName,
					storagePath,
					storageType,
				} = await meiFile.save();

				// Insert into DB
				try {
					const [file] = await db
						.insert(meiFiles)
						.values({
							id,
							originalFileName,
							convertedFileName,
							originalMeiVersion: meiFile.version,
							storageType,
							storagePath,
							title,
							language,
						})
						.returning();
					return file;
				} catch (error) {
					console.error("Failed to insert MEI file into DB", error);
					return status(500, {
						error: "Failed to insert MEI file into DB",
						cause: error instanceof Error ? error.cause : undefined,
					});
				}
			} catch (error) {
				if (error instanceof MeiFileDownloadError) {
					return status(400, {
						error: "Failed to download MEI file",
						cause: error.cause,
					});
				}
				console.error("Failed to process MEI file", error);
				return status(500, {
					error: "Failed to process MEI file",
					cause: error instanceof Error ? error : undefined,
				});
			}
		},
		{ body: createMeiFile },
	);
