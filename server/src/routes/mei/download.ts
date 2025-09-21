import { eq } from "drizzle-orm";
import Elysia, { t } from "elysia";
import { db } from "../../db";
import { meiFiles } from "../../db/schema";

export const meiDownloadRoutes = new Elysia({})
	// Download original MEI file
	.get(
		"/:id/original",
		async ({ params, set }) => {
			const { id } = params;

			// Find the MEI file in the database
			const file = await db.query.meiFiles.findFirst({
				where: eq(meiFiles.id, id),
			});

			if (!file) {
				set.status = 404;
				return { error: "MEI file not found" };
			}

			try {
				// Read the original file from storage
				const filePath = `${file.storagePath}/${file.originalFileName}`;
				const fileContent = await Bun.file(filePath).text();

				// Set appropriate headers for XML download
				set.headers = {
					"Content-Type": "application/xml",
					"Content-Disposition": `attachment; filename="${file.originalFileName}"`,
				};

				return fileContent;
			} catch (error) {
				console.error("Failed to read original MEI file:", error);
				set.status = 500;
				return { error: "Failed to read original MEI file" };
			}
		},
		{
			params: t.Object({
				id: t.String({ description: "MEI file ID" }),
			}),
			response: {
				200: t.String({ description: "Original MEI XML content" }),
				404: t.Object({
					error: t.String({ description: "Error message" }),
				}),
				500: t.Object({
					error: t.String({ description: "Error message" }),
				}),
			},
			detail: {
				summary: "Download original MEI file",
				description:
					"Download the original MEI file as uploaded, in its original format and version.",
				tags: ["MEI Files", "Download"],
			},
		},
	)
	// Download converted MEI 5.1 file
	.get(
		"/:id/converted",
		async ({ params, set }) => {
			const { id } = params;

			// Find the MEI file in the database
			const file = await db.query.meiFiles.findFirst({
				where: eq(meiFiles.id, id),
			});

			if (!file) {
				set.status = 404;
				return { error: "MEI file not found" };
			}

			try {
				// Read the converted file from storage
				const filePath = `${file.storagePath}/${file.convertedFileName}`;
				const fileContent = await Bun.file(filePath).text();

				// Set appropriate headers for XML download
				set.headers = {
					"Content-Type": "application/xml",
					"Content-Disposition": `attachment; filename="${file.convertedFileName}"`,
				};

				return fileContent;
			} catch (error) {
				console.error("Failed to read converted MEI file:", error);
				set.status = 500;
				return { error: "Failed to read converted MEI file" };
			}
		},
		{
			params: t.Object({
				id: t.String({ description: "MEI file ID" }),
			}),
			response: {
				200: t.String({ description: "Converted MEI 5.1 XML content" }),
				404: t.Object({
					error: t.String({ description: "Error message" }),
				}),
				500: t.Object({
					error: t.String({ description: "Error message" }),
				}),
			},
			detail: {
				summary: "Download converted MEI 5.1 file",
				description: "Download the MEI file converted to version 5.1 format.",
				tags: ["MEI Files", "Download"],
			},
		},
	);
