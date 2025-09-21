import Elysia, { t } from "elysia";
import { MeiFileSelectSchema } from "../../db/models";
import { meiFilesService } from "../../services/meiFiles";
import { ErrorResponseSchema } from "../../shared/errors";

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

export const meiAddRoutes = new Elysia({})
	.use(meiFilesService)
	// Add new MEI file
	.post(
		"/",
		async ({ body, meiFilesService }) => {
			// Download MEI XML from URL
			const meiFile = await meiFilesService.fromText(await body.file.text());

			// Insert into DB
			return meiFile.fillDB();
		},
		{
			body: createMeiFile,
			type: "multipart/form-data",
			response: {
				200: MeiFileSelectSchema,
				400: ErrorResponseSchema,
				415: ErrorResponseSchema,
				500: ErrorResponseSchema,
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
		async ({ body, meiFilesService }) => {
			// Download MEI XML from URL
			const meiFile = await meiFilesService.fromURL(body.url);

			return meiFile.fillDB();
		},
		{
			body: createMeiFileFromURL,
			response: {
				200: MeiFileSelectSchema,
				400: ErrorResponseSchema,
				415: ErrorResponseSchema,
				500: ErrorResponseSchema,
			},
			detail: {
				summary: "Create MEI file from URL",
				description:
					"Download and process a MEI file from a provided URL. The file will be automatically converted to MEI 5.1 format, validated, and stored in the system. Returns the created MEI file metadata.",
				tags: ["MEI Files"],
			},
		},
	);
