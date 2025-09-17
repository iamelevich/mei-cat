import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for correction element.
 * @see https://music-encoding.org/guidelines/v5/elements/correction.html
 */
export const CorrectionSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type CorrectionData = v.InferOutput<typeof CorrectionSchema>;
