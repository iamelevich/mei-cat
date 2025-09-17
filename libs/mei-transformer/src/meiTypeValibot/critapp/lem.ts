import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Contains the lemma, or base text, of a textual variation.
 * @see https://music-encoding.org/guidelines/v5/elements/lem.html
 */
export const LemSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type LemData = v.InferOutput<typeof LemSchema>;
