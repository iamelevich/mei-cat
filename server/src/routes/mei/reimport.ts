import Elysia, { t } from "elysia";
import { meiFilesService } from "../../services/meiFiles";
import { ErrorResponseSchema } from "../../shared/errors";

export const meiReimportRoutes = new Elysia()
	.use(meiFilesService)
	.post(
		"/reimport/:id",
		async ({ params, meiFilesService }) => {
			const { id } = params;

			const updatedFile = await meiFilesService.reimport(id);
			return {
				message: "MEI file reimported successfully",
				data: updatedFile,
			};
		},
		{
			params: t.Object({
				id: t.String({ description: "MEI file ID to reimport" }),
			}),
			response: {
				200: t.Object({
					message: t.String(),
					data: t.Object({
						id: t.String(),
						hash: t.String(),
						originalFileName: t.String(),
						convertedFileName: t.String(),
						originalMeiVersion: t.String(),
						storageType: t.String(),
						storagePath: t.String(),
						createdAt: t.Date(),
						updatedAt: t.Date(),
					}),
				}),
				404: ErrorResponseSchema,
				500: ErrorResponseSchema,
			},
			detail: {
				summary: "Reimport a MEI file",
				description: "Reimport a MEI file from the system.",
				tags: ["MEI Files"],
			},
		},
	)
	.post(
		"/reimport/batch",
		async ({ body, meiFilesService }) => {
			const { ids } = body;

			const results = await meiFilesService.reimportBatch(ids);
			return {
				message: "Batch reimport completed",
				data: results,
			};
		},
		{
			body: t.Object({
				ids: t.Array(t.String(), {
					description: "Array of MEI file IDs to reimport",
				}),
			}),
			response: {
				200: t.Object({
					message: t.String(),
					data: t.Object({
						successCount: t.Number(),
						errorCount: t.Number(),
						errors: t.Array(
							t.Object({
								id: t.String(),
								error: t.String(),
							}),
						),
					}),
				}),
				404: ErrorResponseSchema,
				500: ErrorResponseSchema,
			},
			detail: {
				summary: "Batch reimport MEI files",
				description: "Reimport multiple MEI files from the system.",
				tags: ["MEI Files"],
			},
		},
	);
