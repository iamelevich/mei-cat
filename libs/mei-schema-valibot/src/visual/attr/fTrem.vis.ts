import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fTrem.vis.html
 */
export const AttrFTremVisSchema = v.object({
	// Direct attributes
	/**
	 * Indicates the number of beams present.
	 */
	"@beams": v.optional(v.string()),
	/**
	 * Captures the number of "floating" beams, <abbr>i.e.</abbr>, those not attached to stems.
	 */
	"@beams.float": v.optional(v.string()),
	/**
	 * Records the amount of separation between floating beams and stems.
	 */
	"@float.gap": v.optional(v.string()),
});

export type AttrFTremVisData = v.InferOutput<typeof AttrFTremVisSchema>;
