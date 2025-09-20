import type { ModelRespLikeData } from "@mei-cat/mei-schema-valibot";
import { relations } from "drizzle-orm";
import {
	json,
	pgEnum,
	pgTable,
	text,
	timestamp,
	uuid,
} from "drizzle-orm/pg-core";

export const storageTypeEnum = pgEnum("storage_type", ["local", "s3"]);

export const meiFiles = pgTable("mei_files", {
	id: uuid("id").defaultRandom().primaryKey(),

	/** The hash of the MEI 5.1 XML. */
	hash: text("hash").notNull(),

	/** The original file name of the MEI file. */
	originalFileName: text("original_file_name").notNull(),
	/** The original MEI XML version of the MEI file. */
	originalMeiVersion: text("original_mei_version").notNull(),

	/** The converted file name of the MEI file. */
	convertedFileName: text("converted_file_name").notNull(),

	/** The storage type of the MEI file. */
	storageType: storageTypeEnum("storage_type").notNull(),
	/** The storage path of the MEI file. */
	storagePath: text("storage_path").notNull(),

	createdAt: timestamp("created_at", { withTimezone: false })
		.notNull()
		.defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: false })
		.notNull()
		.defaultNow(),
});

export const meiFilesRelations = relations(meiFiles, ({ one }) => ({
	fileDesc: one(fileDesc, {
		fields: [meiFiles.id],
		references: [fileDesc.fileId],
	}),
}));

export const fileDesc = pgTable("file_desc", {
	id: uuid("id").defaultRandom().primaryKey(),

	fileId: uuid("file_id").references(() => meiFiles.id),
});

export const fileDescRelations = relations(fileDesc, ({ many, one }) => ({
	titleStmt: one(titleStmt, {
		fields: [fileDesc.id],
		references: [titleStmt.fileDescId],
	}),
	file: one(meiFiles, {
		fields: [fileDesc.fileId],
		references: [meiFiles.id],
	}),
}));

export const titleStmt = pgTable("title_stmt", {
	id: uuid("id").defaultRandom().primaryKey(),
	fileDescId: uuid("file_desc_id").references(() => fileDesc.id),

	createdAt: timestamp("created_at", { withTimezone: false })
		.notNull()
		.defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: false })
		.notNull()
		.defaultNow(),
});

export const titleStmtRelations = relations(titleStmt, ({ one, many }) => ({
	title: many(title),
	fileDesc: one(fileDesc, {
		fields: [titleStmt.fileDescId],
		references: [fileDesc.id],
	}),
	respStmt: many(respStmt),
}));

export const title = pgTable("title", {
	id: uuid("id").defaultRandom().primaryKey(),
	titleStmtId: uuid("title_stmt_id").references(() => titleStmt.id),
	title: text("title").notNull(),
	language: text("language"),
});

export const titleRelations = relations(title, ({ one }) => ({
	titleStmt: one(titleStmt, {
		fields: [title.titleStmtId],
		references: [titleStmt.id],
	}),
}));

export const respStmtLikeEnum = pgEnum("resp_stmt_like_enum", [
	"arranger",
	"author",
	"composer",
	"contributor",
	"editor",
	"funder",
	"librettist",
	"lyricist",
	"respStmt",
]);

export const respStmt = pgTable("resp_stmt", {
	id: uuid("id").defaultRandom().primaryKey(),
	titleStmtId: uuid("title_stmt_id").references(() => titleStmt.id),

	type: respStmtLikeEnum().notNull(),

	data: json("data")
		.$type<ModelRespLikeData[keyof ModelRespLikeData]>()
		.notNull(),

	createdAt: timestamp("created_at", { withTimezone: false })
		.notNull()
		.defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: false })
		.notNull()
		.defaultNow(),
});

export const respStmtRelations = relations(respStmt, ({ one }) => ({
	titleStmt: one(titleStmt, {
		fields: [respStmt.titleStmtId],
		references: [titleStmt.id],
	}),
}));
