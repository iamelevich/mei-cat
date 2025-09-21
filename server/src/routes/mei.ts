import { count } from "drizzle-orm";
import Elysia, { t } from "elysia";
import { db } from "../db";
import { MeiFileSelectSchema } from "../db/models";
import { meiFiles } from "../db/schema";
import { meiFilesService } from "../services/meiFiles";
import { MeiFileDownloadError } from "../shared/errors";

const ROUTE_PREFIX = "/mei";

// Request schemas
const createMeiFile = t.Union([
	t.Object({
		url: t.String({
			format: "uri",
			description: "URL of the MEI file to download and process",
		}),
	}),
	t.Object({
		file: t.File({
			description: "Bun file of the MEI file to process",
		}),
	}),
]);

const paginationSchema = t.Object({
	page: t.Number({ description: "Current page number" }),
	limit: t.Number({ description: "Number of items per page" }),
	totalCount: t.Number({
		description: "Total number of items across all pages",
	}),
	totalPages: t.Number({ description: "Total number of pages" }),
	hasNextPage: t.Boolean({
		description: "Whether there are more pages after the current one",
	}),
	hasPrevPage: t.Boolean({
		description: "Whether there are pages before the current one",
	}),
});

const meiFilesListResponse = t.Object({
	data: t.Array(MeiFileSelectSchema, { description: "Array of MEI files" }),
	pagination: paginationSchema,
});

const errorResponse = t.Object({
	error: t.String({ description: "Error message describing what went wrong" }),
	cause: t.Optional(
		t.Any({
			description: "Additional error details or cause",
		}),
	),
});

const notFoundResponse = t.Object({
	error: t.Literal("MEI file not found"),
});

export const meiRoutes = new Elysia({ prefix: ROUTE_PREFIX })
	.use(meiFilesService)
	// List all MEI files with pagination
	.get(
		"/",
		async ({ query }) => {
			const page = query.page ?? 1;
			const limit = query.limit ?? 10;
			const offset = (page - 1) * limit;

			// Get total count
			const totalCountResult = await db
				.select({ count: count() })
				.from(meiFiles);
			const totalCount = totalCountResult[0]?.count ?? 0;

			// Get paginated results
			const files = await db
				.select()
				.from(meiFiles)
				.orderBy(meiFiles.createdAt)
				.limit(limit)
				.offset(offset);

			const totalPages = Math.ceil(totalCount / limit);

			return {
				data: files,
				pagination: {
					page,
					limit,
					totalCount,
					totalPages,
					hasNextPage: page < totalPages,
					hasPrevPage: page > 1,
				},
			};
		},
		{
			query: t.Object({
				page: t.Optional(
					t.Number({
						minimum: 1,
						description: "Page number for pagination (starts from 1)",
					}),
				),
				limit: t.Optional(
					t.Number({
						minimum: 1,
						maximum: 100,
						description: "Number of items per page (max 100)",
					}),
				),
			}),
			response: {
				200: meiFilesListResponse,
			},
			detail: {
				summary: "List MEI files",
				description:
					"Retrieve a paginated list of all MEI files in the system. Files are ordered by creation date (oldest first).",
				tags: ["MEI Files"],
			},
		},
	)
	// Get MEI file by id
	.get(
		"/:id",
		async ({ params, status }) => {
			const file = await db.query.meiFiles.findFirst({
				where: (file, { eq }) => eq(file.id, params.id),
			});
			if (!file) {
				return status(404, {
					error: "MEI file not found",
				});
			}
			return file;
		},
		{
			params: t.Object({
				id: t.String({
					format: "uuid",
					description: "Unique identifier of the MEI file",
				}),
			}),
			response: {
				200: MeiFileSelectSchema,
				404: notFoundResponse,
			},
			detail: {
				summary: "Get MEI file by ID",
				description:
					"Retrieve a specific MEI file by its unique identifier. Returns detailed information about the file including metadata, storage information, and timestamps.",
				tags: ["MEI Files"],
			},
		},
	)
	// Add new MEI file from URL
	.post(
		"/",
		async ({ body, meiFilesService, status }) => {
			try {
				// Download MEI XML from URL
				const meiFile =
					"url" in body
						? await meiFilesService.fromURL(body.url)
						: await meiFilesService.fromText(await body.file.text());

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
			body: createMeiFile,
			type: "multipart/form-data",
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
