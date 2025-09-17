import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for history element.
 * @see https://music-encoding.org/guidelines/v5/elements/history.html
 */
export const HistorySchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type HistoryData = v.InferOutput<typeof HistorySchema>;
