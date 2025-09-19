import * as v from "valibot";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrPlacementRelStaffSchema } from "../../shared/attr/placementRelStaff";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";
import { AttrXySchema } from "../../shared/attr/xy";

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
