import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Simplified schema for tr element.
 * @see https://music-encoding.org/guidelines/v5/elements/tr.html
 */
export const TrSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

export type TrData = v.InferOutput<typeof TrSchema>;
