import * as v from "valibot";

/**
 * Attributes that record the unit of measurement in which a value is expressed..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.measurement.html
 */
export const AttrMeasurementSchema = v.object({
	// Direct attributes
	/**
	 * Indicates the unit of measurement.
	 */
	"@unit": v.optional(v.string()),
});

export type AttrMeasurementData = v.InferOutput<typeof AttrMeasurementSchema>;
