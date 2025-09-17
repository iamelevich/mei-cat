import * as v from "valibot";

/**
 * Attributes that specify element-to-element relationships using data attributes.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dataPointing.html
 */
export const AttrDataPointingSchema = v.object({
	/**
	 * Used to point to other elements. Its value must be the ID of a different element.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dataPointing.html#data
	 */
	"@data": v.optional(v.string()),
});

export type AttrDataPointingData = v.InferOutput<typeof AttrDataPointingSchema>;
