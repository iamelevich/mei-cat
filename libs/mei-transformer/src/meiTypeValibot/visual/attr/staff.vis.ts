import * as v from "valibot";
import { AttrVisibilitySchema } from "../../shared";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staff.vis.html
 */
export const AttrStaffVisSchema = v.object({
	// Inherited attribute classes
	...AttrVisibilitySchema.entries,
});

export type AttrStaffVisData = v.InferOutput<typeof AttrStaffVisSchema>;
