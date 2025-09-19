import * as v from "valibot";

/**
 * Attributes supplying pointers to user-defined symbols..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.altSym.html
 */
export const AttrAltSymSchema = v.object({
	// Direct attributes
	/**
	 * Provides a way of pointing to a user-defined symbol. It must contain a reference to an ID of a <gi scheme="MEI">symbolDef</gi> element elsewhere in the document.
	 */
	"@altsym": v.optional(v.string()),
});

export type AttrAltSymData = v.InferOutput<typeof AttrAltSymSchema>;
