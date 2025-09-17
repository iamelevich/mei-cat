import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for treatSched element.
 * @see https://music-encoding.org/guidelines/v5/elements/treatSched.html
 */
export const TreatSchedSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type TreatSchedData = v.InferOutput<typeof TreatSchedSchema>;
