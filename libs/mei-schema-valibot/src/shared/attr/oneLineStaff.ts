import * as v from "valibot";

/**
 * Attributes that record placement of notes on a single-line staff..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.oneLineStaff.html
 */
export const AttrOneLineStaffSchema = v.object({
	// Direct attributes
	/**
	 * Determines the placement of notes on a 1-line staff. A value of <val>true</val> places all notes on the line, while a value of <val>false</val> places stems-up notes above the line and stems-down notes below the line.
	 */
	"@ontheline": v.optional(v.string()),
});

export type AttrOneLineStaffData = v.InferOutput<typeof AttrOneLineStaffSchema>;
