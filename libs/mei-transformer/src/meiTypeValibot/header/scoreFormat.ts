import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for scoreFormat element.
 * @see https://music-encoding.org/guidelines/v5/elements/scoreFormat.html
 */
export const ScoreFormatSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ScoreFormatData = v.InferOutput<typeof ScoreFormatSchema>;
