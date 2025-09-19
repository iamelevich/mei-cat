import * as v from "valibot";

/**
 * Attributes that describe the symbol used to group a set of staves..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffGroupingSym.html
 */
export const AttrStaffGroupingSymSchema = v.object({
	// Direct attributes
	/**
	 * Specifies the symbol used to group a set of staves.
	 */
	"@symbol": v.optional(v.string()),
});

export type AttrStaffGroupingSymData = v.InferOutput<
	typeof AttrStaffGroupingSymSchema
>;
