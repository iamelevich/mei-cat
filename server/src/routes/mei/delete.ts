import { eq } from "drizzle-orm";
import Elysia, { t } from "elysia";
import { db } from "../../db";
import { meiFiles } from "../../db/schema";
import { meiFilesService } from "../../services/meiFiles";
import { APINotFoundError, ErrorResponseSchema } from "../../shared/errors";

export const meiDeleteRoutes = new Elysia({})
	.use(meiFilesService)
	// Delete a MEI file
	.delete(
		"/:id",
		async ({ params, meiFilesService }) => {
			const { id } = params;
			const meiFile = await db.query.meiFiles.findFirst({
				where: eq(meiFiles.id, id),
			});
			if (!meiFile) {
				throw new APINotFoundError("MEI file not found");
			}
			await meiFilesService.delete(meiFile);
			return { message: "MEI file deleted" };
		},
		{
			params: t.Object({
				id: t.String({ description: "MEI file ID" }),
			}),
			response: {
				200: t.Object({
					message: t.Literal("MEI file deleted"),
				}),
				404: ErrorResponseSchema,
				500: ErrorResponseSchema,
			},
			detail: {
				summary: "Delete a MEI file",
				description: "Delete a MEI file from the system.",
				tags: ["MEI Files"],
			},
		},
	)
	// Batch delete MEI files
	.delete(
		"/batch",
		async ({ body, meiFilesService }) => {
			const { ids } = body;

			if (!ids || ids.length === 0) {
				throw new APINotFoundError("No IDs provided for deletion");
			}

			const results = await meiFilesService.deleteBatch(ids);

			return {
				message: `Batch delete completed`,
				successCount: results.successCount,
				errorCount: results.errorCount,
				errors: results.errors,
			};
		},
		{
			body: t.Object({
				ids: t.Array(t.String(), {
					description: "Array of MEI file IDs to delete",
				}),
			}),
			response: {
				200: t.Object({
					message: t.String(),
					successCount: t.Number(),
					errorCount: t.Number(),
					errors: t.Array(
						t.Object({
							id: t.String(),
							error: t.String(),
						}),
					),
				}),
				400: ErrorResponseSchema,
				500: ErrorResponseSchema,
			},
			detail: {
				summary: "Batch delete MEI files",
				description:
					"Delete multiple MEI files from the system by providing an array of IDs.",
				tags: ["MEI Files"],
			},
		},
	);
