import * as v from "valibot";

/**
 * Attributes for linking metadata to data..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dataPointing.html
 */
export const AttrDataPointingSchema = v.object({
	// Direct attributes
	/**
	 * Used to link metadata elements to one or more data-containing elements.
	 */
	"@data": v.optional(v.string()),
});

export type AttrDataPointingData = v.InferOutput<typeof AttrDataPointingSchema>;
