import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for treatHist element.
 * @see https://music-encoding.org/guidelines/v5/elements/treatHist.html
 */
export const TreatHistSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type TreatHistData = v.InferOutput<typeof TreatHistSchema>;
