import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-typebox";

import { meiFiles, todos } from "./schema";

export type TodoSelect = InferSelectModel<typeof todos>;
export type TodoInsert = InferInsertModel<typeof todos>;

export type MeiFileSelect = InferSelectModel<typeof meiFiles>;
export type MeiFileInsert = InferInsertModel<typeof meiFiles>;

export const TodoInsertSchema = createInsertSchema(todos);
export const TodoSelectSchema = createSelectSchema(todos);
export const MeiFileInsertSchema = createInsertSchema(meiFiles);
export const MeiFileSelectSchema = createSelectSchema(meiFiles);
