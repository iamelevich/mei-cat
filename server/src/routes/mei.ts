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

				// Insert into DB
				try {
					return meiFile.fillDB();
				} catch (error) {
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
