import * as v from "valibot";

/**
 * Temporal alignment attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.alignment.html
 */
export const AttrAlignmentSchema = v.object({
	// Direct attributes
	/**
	 * Indicates the point of occurrence of this feature along a time line. Its value must be the ID of a <gi scheme="MEI">when</gi> element elsewhere in the document.
	 */
	"@when": v.optional(v.string()),
});

export type AttrAlignmentData = v.InferOutput<typeof AttrAlignmentSchema>;
