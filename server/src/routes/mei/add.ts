import Elysia, { t } from "elysia";
import { MeiFileSelectSchema } from "../../db/models";
import { meiFilesService } from "../../services/meiFiles";
import { MeiFileDownloadError } from "../../shared/errors";

// Request schemas
const createMeiFile = t.Object({
	file: t.File({
		description: "Bun file of the MEI file to process",
	}),
});

const createMeiFileFromURL = t.Object({
	url: t.String({
		format: "uri",
		description: "URL of the MEI file to download and process",
	}),
});

const errorResponse = t.Object({
	error: t.String({ description: "Error message describing what went wrong" }),
	cause: t.Optional(
		t.Any({
			description: "Additional error details or cause",
		}),
	),
});

export const meiAddRoutes = new Elysia({})
	.use(meiFilesService)
	// Add new MEI file
	.post(
		"/",
		async ({ body, meiFilesService, status }) => {
			try {
				// Download MEI XML from URL
				const meiFile = await meiFilesService.fromText(await body.file.text());

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
				console.error("Failed to process MEI file", error);
				return status(500, {
					error: "Failed to process MEI file",
					cause: error instanceof Error ? error : undefined,
				});
			}
		},
		{
			body: createMeiFile,
			type: "multipart/form-data",
			response: {
				200: MeiFileSelectSchema,
				400: errorResponse,
				500: errorResponse,
			},
			detail: {
				summary: "Create MEI file",
				description:
					"Process a provided MEI file. The file will be automatically converted to MEI 5.1 format, validated, and stored in the system. Returns the created MEI file metadata.",
				tags: ["MEI Files"],
			},
		},
	)
	// Add new MEI file from file
	.post(
		"/url",
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
		{
			body: createMeiFileFromURL,
			response: {
				200: MeiFileSelectSchema,
				400: errorResponse,
				500: errorResponse,
			},
			detail: {
				summary: "Create MEI file from URL",
				description:
					"Download and process a MEI file from a provided URL. The file will be automatically converted to MEI 5.1 format, validated, and stored in the system. Returns the created MEI file metadata.",
				tags: ["MEI Files"],
			},
		},
	);
