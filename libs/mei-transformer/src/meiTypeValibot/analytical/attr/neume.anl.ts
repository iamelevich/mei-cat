import * as v from "valibot";
import { AttrNeumeTypeSchema } from "../../neumes/attr/neumeType";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.neume.anl.html
 */
export const AttrNeumeAnlSchema = v.object({
	// Inherited attribute classes
	...AttrNeumeTypeSchema.entries,
});

export type AttrNeumeAnlData = v.InferOutput<typeof AttrNeumeAnlSchema>;
