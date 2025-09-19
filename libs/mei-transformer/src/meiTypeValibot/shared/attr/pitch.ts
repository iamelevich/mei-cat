import * as v from "valibot";

/**
 * Attributes that record written pitch name..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pitch.html
 */
export const AttrPitchSchema = v.object({
	// Direct attributes
	/**
	 * Contains a written pitch name.
	 */
	"@pname": v.optional(v.string()),
});

export type AttrPitchData = v.InferOutput<typeof AttrPitchSchema>;
