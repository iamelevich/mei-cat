import * as v from "valibot";
import {
	AttrColorSchema,
	AttrPlacementRelStaffSchema,
	AttrTypographySchema,
	AttrVisualOffsetSchema,
	AttrXySchema,
} from "../../shared";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mNum.vis.html
 */
export const AttrMNumVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,
});

export type AttrMNumVisData = v.InferOutput<typeof AttrMNumVisSchema>;
