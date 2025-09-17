import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for hand element.
 * @see https://music-encoding.org/guidelines/v5/elements/hand.html
 */
export const HandSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type HandData = v.InferOutput<typeof HandSchema>;
