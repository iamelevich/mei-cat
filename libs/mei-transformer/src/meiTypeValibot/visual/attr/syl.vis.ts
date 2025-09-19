import * as v from "valibot";
import {
	AttrHorizontalAlignSchema,
	AttrPlacementRelStaffSchema,
	AttrTypographySchema,
	AttrVisualOffsetSchema,
	AttrXySchema,
} from "../../shared";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.syl.vis.html
 */
export const AttrSylVisSchema = v.object({
	// Inherited attribute classes
	...AttrHorizontalAlignSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,
});

export type AttrSylVisData = v.InferOutput<typeof AttrSylVisSchema>;
