import * as v from "valibot";

/**
 * Attributes that provide information about a measure’s conformance to the prevailing meter..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterConformance.bar.html
 */
export const AttrMeterConformanceBarSchema = v.object({
	// Direct attributes
	/**
	 * Indicates whether or not a bar line is "controlling"; that is, if it indicates a point of alignment across all the parts. Bar lines within a score are usually controlling; that is, they "line up". Bar lines within parts may or may not be controlling. When applied to <gi scheme="MEI">measure</gi>, this attribute indicates the nature of the right bar line but not the left.
	 */
	"@control": v.optional(v.string()),
	/**
	 * Indicates the relationship between the content of a measure and the prevailing meter.
	 */
	"@metcon": v.optional(v.string()),
});

export type AttrMeterConformanceBarData = v.InferOutput<
	typeof AttrMeterConformanceBarSchema
>;
