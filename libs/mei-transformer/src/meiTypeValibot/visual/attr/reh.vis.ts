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
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.reh.vis.html
 */
export const AttrRehVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,
});

export type AttrRehVisData = v.InferOutput<typeof AttrRehVisSchema>;
