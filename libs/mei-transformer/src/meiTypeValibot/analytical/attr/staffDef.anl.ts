import * as v from "valibot";
import { AttrKeySigDefaultAnlSchema } from "..";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.anl.html
 */
export const AttrStaffDefAnlSchema = v.object({
	// Inherited attribute classes
	...AttrKeySigDefaultAnlSchema.entries,
});

export type AttrStaffDefAnlData = v.InferOutput<typeof AttrStaffDefAnlSchema>;
