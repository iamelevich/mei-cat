import * as v from "valibot";

/**
 * Attributes for capturing momentary pitch inflection in the gestural domain..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.accidental.ges.html
 */
export const AttrAccidentalGesSchema = v.object({
	// Direct attributes
	/**
	 * Records the performed pitch inflection.
	 */
	"@accid.ges": v.optional(v.string()),
});

export type AttrAccidentalGesData = v.InferOutput<
	typeof AttrAccidentalGesSchema
>;
