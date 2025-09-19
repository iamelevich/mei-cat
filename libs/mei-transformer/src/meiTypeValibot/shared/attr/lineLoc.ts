import * as v from "valibot";

/**
 * Attributes for identifying the staff line with which a feature is associated..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lineLoc.html
 */
export const AttrLineLocSchema = v.object({
	// Direct attributes
	/**
	 * Indicates the line upon which a feature stands. The value must be in the range between 1 and the number of lines on the staff. The numbering of lines starts with the lowest line of the staff.
	 */
	"@line": v.optional(v.string()),
});

export type AttrLineLocData = v.InferOutput<typeof AttrLineLocSchema>;
