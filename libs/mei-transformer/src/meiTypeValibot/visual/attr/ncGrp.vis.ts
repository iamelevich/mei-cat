import * as v from "valibot";
import {
	AttrColorSchema,
	AttrStaffLocSchema,
	AttrTypographySchema,
	AttrVisibilitySchema,
	AttrVisualOffsetHoSchema,
	AttrXySchema,
} from "../../shared";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ncGrp.vis.html
 */
export const AttrNcGrpVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisibilitySchema.entries,
	...AttrVisualOffsetHoSchema.entries,
	...AttrXySchema.entries,
});

export type AttrNcGrpVisData = v.InferOutput<typeof AttrNcGrpVisSchema>;
