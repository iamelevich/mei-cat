import * as v from "valibot";
import { AttrStaffGroupingSymSchema } from "../attr/staffGroupingSym";
import { AttrStartEndIdSchema } from "../attr/startEndId";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.grpSym.log.html
 */
export const AttrGrpSymLogSchema = v.object({
	// Inherited attribute classes
	...AttrStaffGroupingSymSchema.entries,
	...AttrStartEndIdSchema.entries,

	// Direct attributes
	/**
	 * Indicates the nesting level of staff grouping symbols.
	 */
	"@level": v.optional(v.string()),
});

export type AttrGrpSymLogData = v.InferOutput<typeof AttrGrpSymLogSchema>;
