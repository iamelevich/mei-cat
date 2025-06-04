import { sql } from "drizzle-orm";
import {
	boolean,
	integer,
	pgEnum,
	pgTable,
	text,
	timestamp,
} from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
	id: text("id").primaryKey(),
	title: text("title").notNull(),
	completed: boolean("completed").notNull().default(false),
	createdAt: timestamp("created_at", { withTimezone: false })
		.notNull()
		.defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: false })
		.notNull()
		.defaultNow(),
});

export const storageTypeEnum = pgEnum("storage_type", ["local", "s3"]);

export const meiFiles = pgTable("mei_files", {
	/** The ID of the MEI file. `xml:id` attribute of `<mei>` element will be used as the ID. */
	id: text("id").primaryKey(),

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

	/** The title of the MEI file. Source from `<fileDesc>` -> `<titleStmt>` -> `<title>` element. */
	title: text("title").notNull(),
	/** The language of the MEI file. Source from `<fileDesc>` -> `<titleStmt>` -> `<title>` -> `@xml:lang` attribute. */
	language: text("language").notNull(),

	createdAt: timestamp("created_at", { withTimezone: false })
		.notNull()
		.defaultNow(),
	updatedAt: timestamp("updated_at", { withTimezone: false })
		.notNull()
		.defaultNow(),
});
