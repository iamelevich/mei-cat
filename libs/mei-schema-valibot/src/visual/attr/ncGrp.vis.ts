import * as v from "valibot";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrStaffLocSchema } from "../../shared/attr/staffLoc";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrVisibilitySchema } from "../../shared/attr/visibility";
import { AttrVisualOffsetHoSchema } from "../../shared/attr/visualOffset.ho";
import { AttrXySchema } from "../../shared/attr/xy";

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
