import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for score element.
 * @see https://music-encoding.org/guidelines/v5/elements/score.html
 */
export const ScoreSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type ScoreData = v.InferOutput<typeof ScoreSchema>;
