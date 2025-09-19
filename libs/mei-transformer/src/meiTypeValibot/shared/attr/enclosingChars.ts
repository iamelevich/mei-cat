import * as v from "valibot";

/**
 * Attributes that capture characters used to enclose symbols having a cautionary or editorial function..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.enclosingChars.html
 */
export const AttrEnclosingCharsSchema = v.object({
	// Direct attributes
	/**
	 * Records the characters often used to mark accidentals, articulations, and sometimes notes as having a cautionary or editorial function. For an example of cautionary accidentals enclosed in parentheses, see Read, p. 131, ex. 9-14.
	 */
	"@enclose": v.optional(v.string()),
});

export type AttrEnclosingCharsData = v.InferOutput<
	typeof AttrEnclosingCharsSchema
>;
