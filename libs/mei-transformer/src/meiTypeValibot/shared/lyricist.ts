import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "./attr/common";
import { AttrLangSchema } from "./attr/lang";

/**
 * Simplified schema for lyricist element.
 * @see https://music-encoding.org/guidelines/v5/elements/lyricist.html
 */
export const LyricistSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type LyricistData = v.InferOutput<typeof LyricistSchema>;
