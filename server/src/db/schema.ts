import { sql } from "drizzle-orm";
import {
	boolean,
	integer,
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
