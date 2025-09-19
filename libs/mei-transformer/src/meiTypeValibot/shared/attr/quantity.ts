import * as v from "valibot";
import { AttrMeasurementSchema, AttrRangingSchema } from "..";

/**
 * Attributes that specify a measurement in numerical terms..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.quantity.html
 */
export const AttrQuantitySchema = v.object({
	// Inherited attribute classes
	...AttrMeasurementSchema.entries,
	...AttrRangingSchema.entries,

	// Direct attributes
	/**
	 * Numeric value capturing a measurement or count. Can only be interpreted in combination with the unit attribute.
	 */
	"@quantity": v.optional(v.string()),
});

export type AttrQuantityData = v.InferOutput<typeof AttrQuantitySchema>;
