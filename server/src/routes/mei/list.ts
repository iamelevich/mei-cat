import { count } from "drizzle-orm";
import Elysia, { t } from "elysia";
import { db } from "../../db";
import { meiFiles } from "../../db/schema";
import { ErrorResponseSchema } from "../../shared/errors";

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

export const MeiListItemSchema = t.Object({
	id: t.String({ description: "MEI file ID" }),
	title: t.Array(
		t.Object({
			title: t.String({ description: "Title of the MEI file" }),
			language: t.Nullable(t.String({ description: "Language of the title" })),
		}),
		{ description: "Array of titles" },
	),
	createdAt: t.Date({
		description: "Timestamp when the file was first processed",
	}),
	updatedAt: t.Date({
		description: "Timestamp when the file was last updated",
	}),
});

const meiFilesListResponse = t.Object({
	data: t.Array(MeiListItemSchema, { description: "Array of MEI files" }),
	pagination: paginationSchema,
});

export const meiListRoutes = new Elysia({}) // List all MEI files with pagination
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
			const files = await db.query.meiFiles.findMany({
				limit,
				offset,
				with: {
					fileDesc: {
						with: {
							titleStmt: {
								with: {
									title: {
										columns: {
											title: true,
											language: true,
										},
									},
								},
							},
						},
					},
				},
			});

			const totalPages = Math.ceil(totalCount / limit);

			return {
				data: files.map((file) => ({
					id: file.id,
					title: file.fileDesc?.titleStmt?.title ?? [],
					createdAt: file.createdAt,
					updatedAt: file.updatedAt,
				})),
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
				500: ErrorResponseSchema,
			},
			detail: {
				summary: "List MEI files",
				description:
					"Retrieve a paginated list of all MEI files in the system. Files are ordered by creation date (oldest first).",
				tags: ["MEI Files"],
			},
		},
	);
