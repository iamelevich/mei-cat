import * as v from "valibot";
import { AttrDurationRatioSchema } from "../../shared/attr/duration.ratio";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.ges.mensural.html
 */
export const AttrRestGesMensuralSchema = v.object({
	// Inherited attribute classes
	...AttrDurationRatioSchema.entries,
});

export type AttrRestGesMensuralData = v.InferOutput<
	typeof AttrRestGesMensuralSchema
>;
