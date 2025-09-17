import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for subst element.
 * @see https://music-encoding.org/guidelines/v5/elements/subst.html
 */
export const SubstSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type SubstData = v.InferOutput<typeof SubstSchema>;
