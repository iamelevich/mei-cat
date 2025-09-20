import * as v from "valibot";

/**
 * Attributes that record the visual rendition of beams..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamRend.html
 */
export const AttrBeamRendSchema = v.object({
	// Direct attributes
	/**
	 * Captures whether a beam is "feathered" and in which direction.
	 */
	"@form": v.optional(v.string()),
	/**
	 * Records the placement of the beam relative to the events it affects.
	 */
	"@place": v.optional(v.string()),
	/**
	 * Indicates presence of slash through the beam.
	 */
	"@slash": v.optional(v.string()),
	/**
	 * Records the slope of the beam.
	 */
	"@slope": v.optional(v.string()),
});

export type AttrBeamRendData = v.InferOutput<typeof AttrBeamRendSchema>;
