import * as v from "valibot";

/**
 * Attributes that provide information about a structure’s conformance to the prevailing meter..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterConformance.html
 */
export const AttrMeterConformanceSchema = v.object({
	// Direct attributes
	/**
	 * Indicates the relationship between the content of a staff or layer and the prevailing meter.
	 */
	"@metcon": v.optional(v.string()),
});

export type AttrMeterConformanceData = v.InferOutput<
	typeof AttrMeterConformanceSchema
>;
