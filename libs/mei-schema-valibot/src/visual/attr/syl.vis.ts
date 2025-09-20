import * as v from "valibot";
import { AttrHorizontalAlignSchema } from "../../shared/attr/horizontalAlign";
import { AttrPlacementRelStaffSchema } from "../../shared/attr/placementRelStaff";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";
import { AttrXySchema } from "../../shared/attr/xy";

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
