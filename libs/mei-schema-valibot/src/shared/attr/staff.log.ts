import * as v from "valibot";
import { AttrMeterConformanceSchema } from "./meterConformance";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staff.log.html
 */
export const AttrStaffLogSchema = v.object({
	// Inherited attribute classes
	...AttrMeterConformanceSchema.entries,

	// Direct attributes
	/**
	 * Provides a mechanism for linking the staff to a staffDef element.
	 */
	"@def": v.optional(v.string()),
});

export type AttrStaffLogData = v.InferOutput<typeof AttrStaffLogSchema>;
