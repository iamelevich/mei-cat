import * as v from "valibot";

/**
 * Used by layerDef, staffDef, and scoreDef to provide default values for attributes in the visual domain related to beaming..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beaming.vis.html
 */
export const AttrBeamingVisSchema = v.object({
	// Direct attributes
	/**
	 * Color of beams, including those associated with tuplets.
	 */
	"@beam.color": v.optional(v.string()),
	/**
	 * Encodes whether a beam is "feathered" and in which direction.
	 */
	"@beam.rend": v.optional(v.string()),
	/**
	 * Captures beam slope.
	 */
	"@beam.slope": v.optional(v.string()),
});

export type AttrBeamingVisData = v.InferOutput<typeof AttrBeamingVisSchema>;
