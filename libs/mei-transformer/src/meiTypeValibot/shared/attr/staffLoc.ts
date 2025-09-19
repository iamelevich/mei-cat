import * as v from "valibot";

/**
 * Attributes that identify location on a staff in terms of lines and spaces..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffLoc.html
 */
export const AttrStaffLocSchema = v.object({
	// Direct attributes
	/**
	 * Holds the staff location of the feature.
	 */
	"@loc": v.optional(v.string()),
});

export type AttrStaffLocData = v.InferOutput<typeof AttrStaffLocSchema>;
