import * as v from "valibot";

/**
 * Indication of coloration..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.coloration.html
 */
export const AttrColorationSchema = v.object({
	// Direct attributes
	/**
	 * Indicates this feature is 'colored'; that is, it is a participant in a change in rhythmic values. In mensural notation, coloration is indicated by colored notes (red, black, etc.) where void notes would otherwise occur. In CMN, coloration is indicated by an inverse color; that is, the note head is void when it would otherwise be filled and vice versa.
	 */
	"@colored": v.optional(v.string()),
});

export type AttrColorationData = v.InferOutput<typeof AttrColorationSchema>;
