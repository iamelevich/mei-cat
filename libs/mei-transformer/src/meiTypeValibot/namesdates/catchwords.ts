import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Contains a word or phrase taken from a fixed point in a codex to provide an identifying siglum.
 * @see https://music-encoding.org/guidelines/v5/elements/catchwords.html
 */
export const CatchwordsSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type CatchwordsData = v.InferOutput<typeof CatchwordsSchema>;
