import {
	DefaultErrorFunction,
	SetErrorFunction,
} from "@sinclair/typebox/errors";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-typebox";
import { t } from "elysia";
import { meiFiles } from "./schema";

// Set error message for typebox from message property if it exists
SetErrorFunction((e) => {
	if (e.schema.message && typeof e.schema.message === "string") {
		return e.schema.message;
	}
	return DefaultErrorFunction(e);
});

export type MeiFileSelect = InferSelectModel<typeof meiFiles>;
export type MeiFileInsert = InferInsertModel<typeof meiFiles>;

export const MeiFileInsertSchema = createInsertSchema(meiFiles);
export const MeiFileSelectSchema = createSelectSchema(meiFiles, {
	id: t.String({ description: "Unique identifier for the MEI file" }),
	hash: t.String({ description: "SHA-256 hash of the MEI 5.1 XML content" }),
	originalFileName: t.String({
		description: "Original filename of the uploaded MEI file",
	}),
	originalMeiVersion: t.String({
		description: "Original MEI XML version of the file",
	}),
	convertedFileName: t.String({
		description: "Filename after conversion to MEI 5.1",
	}),
	storageType: t.Union([t.Literal("local"), t.Literal("s3")], {
		description: "Storage backend used for the file",
	}),
	storagePath: t.String({ description: "Path where the file is stored" }),
	createdAt: t.Date({
		description: "Timestamp when the file was first processed",
	}),
	updatedAt: t.Date({
		description: "Timestamp when the file was last updated",
	}),
});
