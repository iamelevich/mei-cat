import * as v from "valibot";

/**
 * Attributes that describe pitch class..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pitchClass.html
 */
export const AttrPitchClassSchema = v.object({
	// Direct attributes
	/**
	 * Holds pitch class information.
	 */
	"@pclass": v.optional(v.string()),
});

export type AttrPitchClassData = v.InferOutput<typeof AttrPitchClassSchema>;
