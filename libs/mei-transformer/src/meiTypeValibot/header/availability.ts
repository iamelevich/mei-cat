import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Simplified schema for availability element.
 * @see https://music-encoding.org/guidelines/v5/elements/availability.html
 */
export const AvailabilitySchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

export type AvailabilityData = v.InferOutput<typeof AvailabilitySchema>;
