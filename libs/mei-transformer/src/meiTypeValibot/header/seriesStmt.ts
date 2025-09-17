import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for seriesStmt element.
 * @see https://music-encoding.org/guidelines/v5/elements/seriesStmt.html
 */
export const SeriesStmtSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type SeriesStmtData = v.InferOutput<typeof SeriesStmtSchema>;
