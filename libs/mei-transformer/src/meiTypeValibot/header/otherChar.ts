import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for otherChar element.
 * @see https://music-encoding.org/guidelines/v5/elements/otherChar.html
 */
export const OtherCharSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type OtherCharData = v.InferOutput<typeof OtherCharSchema>;
