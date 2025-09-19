import * as v from "valibot";

/**
 * Attributes which identify a document hand..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.handIdent.html
 */
export const AttrHandIdentSchema = v.object({
	// Direct attributes
	/**
	 * Signifies the hand responsible for an action. The value must be the ID of a <gi scheme="MEI">hand</gi> element declared in the header.
	 */
	"@hand": v.optional(v.string()),
});

export type AttrHandIdentData = v.InferOutput<typeof AttrHandIdentSchema>;
