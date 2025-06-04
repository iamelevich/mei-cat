import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-typebox";

import { meiFiles } from "./schema";

export type MeiFileSelect = InferSelectModel<typeof meiFiles>;
export type MeiFileInsert = InferInsertModel<typeof meiFiles>;

export const MeiFileInsertSchema = createInsertSchema(meiFiles);
export const MeiFileSelectSchema = createSelectSchema(meiFiles);
