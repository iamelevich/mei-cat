import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for notesStmt element.
 * @see https://music-encoding.org/guidelines/v5/elements/notesStmt.html
 */
export const NotesStmtSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type NotesStmtData = v.InferOutput<typeof NotesStmtSchema>;
