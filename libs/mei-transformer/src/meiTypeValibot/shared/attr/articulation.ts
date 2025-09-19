import * as v from "valibot";

/**
 * Attributes for capturing the written signs that describe the method of performance..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.articulation.html
 */
export const AttrArticulationSchema = v.object({
	// Direct attributes
	/**
	 * Encodes the written articulation(s). Articulations are normally encoded in order from the note head outward; that is, away from the stem. See additional notes at att.vis.note. Only articulations should be encoded in the artic attribute; for example, fingerings should be encoded using the <gi scheme="MEI">fing</gi> element.
	 */
	"@artic": v.optional(v.string()),
});

export type AttrArticulationData = v.InferOutput<typeof AttrArticulationSchema>;
