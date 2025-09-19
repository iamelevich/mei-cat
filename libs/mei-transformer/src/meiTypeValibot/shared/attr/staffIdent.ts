import * as v from "valibot";

/**
 * Attributes for identifying the staff associated with the current feature..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffIdent.html
 */
export const AttrStaffIdentSchema = v.object({
	// Direct attributes
	/**
	 * Signifies the staff on which a notated event occurs or to which a control event applies. Mandatory when applicable.
	 */
	"@staff": v.optional(v.string()),
});

export type AttrStaffIdentData = v.InferOutput<typeof AttrStaffIdentSchema>;
