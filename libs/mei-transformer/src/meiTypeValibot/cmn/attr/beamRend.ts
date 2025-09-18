import * as v from "valibot";

/**
 * Attributes that record the visual rendition of beams.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamRend.html
 */
export const AttrBeamRendSchema = v.object({
	/**
	 * Captures whether a beam is "feathered" and in which direction.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamRend.html#form
	 */
	"@form": v.optional(
		v.union([
			v.literal("acc"),
			v.literal("mixed"),
			v.literal("rit"),
			v.literal("norm"),
		]),
	),

	/**
	 * Records the placement of the beam relative to the events it affects.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamRend.html#place
	 */
	"@place": v.optional(v.string()),
});

export type AttrBeamRendData = v.InferOutput<typeof AttrBeamRendSchema>;
