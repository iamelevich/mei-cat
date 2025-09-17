import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for normalization element.
 * @see https://music-encoding.org/guidelines/v5/elements/normalization.html
 */
export const NormalizationSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type NormalizationData = v.InferOutput<typeof NormalizationSchema>;
