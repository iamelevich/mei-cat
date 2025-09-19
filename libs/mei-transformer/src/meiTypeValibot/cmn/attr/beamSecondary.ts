import * as v from "valibot";

/**
 * Attributes that capture information about secondary beaming..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamSecondary.html
 */
export const AttrBeamSecondarySchema = v.object({
	// Direct attributes
	/**
	 * Presence of this attribute indicates that the secondary beam should be broken following this note/chord. The value of the attribute records the number of beams which should remain unbroken.
	 */
	"@breaksec": v.optional(v.string()),
});

export type AttrBeamSecondaryData = v.InferOutput<
	typeof AttrBeamSecondarySchema
>;
