import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";

/**
 * Simplified schema for td element.
 * @see https://music-encoding.org/guidelines/v5/elements/td.html
 */
export const TdSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

export type TdData = v.InferOutput<typeof TdSchema>;
