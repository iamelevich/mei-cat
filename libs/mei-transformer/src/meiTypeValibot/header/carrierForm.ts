import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for carrierForm element.
 * @see https://music-encoding.org/guidelines/v5/elements/carrierForm.html
 */
export const CarrierFormSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type CarrierFormData = v.InferOutput<typeof CarrierFormSchema>;
