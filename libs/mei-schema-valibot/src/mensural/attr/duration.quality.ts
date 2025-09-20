import * as v from "valibot";

/**
 * Attribute that expresses duration for a given mensural note symbol..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.duration.quality.html
 */
export const AttrDurationQualitySchema = v.object({
	// Direct attributes
	/**
	 * Encodes the durational quality of a mensural note using the values provided by the data.DURQUALITY.mensural datatype (<abbr>i.e.</abbr>, the perfect / imperfect / altered / major / minor / duplex quality of a note).
	 */
	"@dur.quality": v.optional(v.string()),
});

export type AttrDurationQualityData = v.InferOutput<
	typeof AttrDurationQualitySchema
>;
