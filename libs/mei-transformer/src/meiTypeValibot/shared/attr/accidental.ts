import * as v from "valibot";

/**
 * Attributes for capturing momentary pitch inflection..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.accidental.html
 */
export const AttrAccidentalSchema = v.object({
	// Direct attributes
	/**
	 * Captures a written accidental.
	 */
	"@accid": v.optional(v.string()),
});

export type AttrAccidentalData = v.InferOutput<typeof AttrAccidentalSchema>;
