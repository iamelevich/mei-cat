import * as v from "valibot";
import { AttrRestGesMensuralSchema } from "../../mensural";
import { AttrDurationGesSchema } from "..";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.ges.html
 */
export const AttrRestGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
	...AttrRestGesMensuralSchema.entries,
});

export type AttrRestGesData = v.InferOutput<typeof AttrRestGesSchema>;
