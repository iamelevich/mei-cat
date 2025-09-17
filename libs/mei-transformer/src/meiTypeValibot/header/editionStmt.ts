import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for editionStmt element.
 * @see https://music-encoding.org/guidelines/v5/elements/editionStmt.html
 */
export const EditionStmtSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type EditionStmtData = v.InferOutput<typeof EditionStmtSchema>;
