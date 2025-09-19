import * as v from "valibot";
import {
	AttrColorSchema,
	AttrExtenderSchema,
	AttrPlacementRelStaffSchema,
	AttrVerticalGroupSchema,
	AttrVisualOffsetSchema,
	AttrVisualOffset2HoSchema,
	AttrVisualOffset2ToSchema,
	AttrXySchema,
} from "../../shared";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.attacca.vis.html
 */
export const AttrAttaccaVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrExtenderSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrVerticalGroupSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrVisualOffset2HoSchema.entries,
	...AttrVisualOffset2ToSchema.entries,
	...AttrXySchema.entries,
});

export type AttrAttaccaVisData = v.InferOutput<typeof AttrAttaccaVisSchema>;
