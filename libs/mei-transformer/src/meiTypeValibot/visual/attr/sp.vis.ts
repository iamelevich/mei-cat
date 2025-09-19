import * as v from "valibot";
import {
	AttrPlacementRelStaffSchema,
	AttrVisualOffsetSchema,
	AttrVisualOffset2HoSchema,
	AttrVisualOffset2ToSchema,
	AttrXySchema,
} from "../../shared";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sp.vis.html
 */
export const AttrSpVisSchema = v.object({
	// Inherited attribute classes
	...AttrPlacementRelStaffSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrVisualOffset2HoSchema.entries,
	...AttrVisualOffset2ToSchema.entries,
	...AttrXySchema.entries,
});

export type AttrSpVisData = v.InferOutput<typeof AttrSpVisSchema>;
