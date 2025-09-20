import * as v from "valibot";

/**
 * Attributes for identifying the staff associated with a distant feature..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.origin.staffIdent.html
 */
export const AttrOriginStaffIdentSchema = v.object({
	// Direct attributes
	/**
	 * signifies the staff on which referenced notation occurs. Defaults to the same value as the local staff. Mandatory when applicable.
	 */
	"@origin.staff": v.optional(v.string()),
});

export type AttrOriginStaffIdentData = v.InferOutput<
	typeof AttrOriginStaffIdentSchema
>;
