import * as v from "valibot";
import { AttrMeasurementSchema, AttrRangingSchema } from "..";

/**
 * Provides attributes for describing the size of an entity..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.extent.html
 */
export const AttrExtentSchema = v.object({
	// Inherited attribute classes
	...AttrMeasurementSchema.entries,
	...AttrRangingSchema.entries,

	// Direct attributes
	/**
	 * Captures a measurement, count, or description. When extent contains a numeric value, use the unit attribute to indicate the measurement unit.
	 */
	"@extent": v.optional(v.string()),
});

export type AttrExtentData = v.InferOutput<typeof AttrExtentSchema>;
