import * as v from "valibot";
import { AttrExtSymSchema } from "../../externalsymbols/attr/extSym";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrPlacementRelStaffSchema } from "../../shared/attr/placementRelStaff";
import { AttrStaffLocSchema } from "../../shared/attr/staffLoc";
import { AttrStaffLocPitchedSchema } from "../../shared/attr/staffLoc.pitched";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrVerticalGroupSchema } from "../../shared/attr/verticalGroup";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrAltSymSchema } from "../../usersymbols/attr/altSym";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.breath.vis.html
 */
export const AttrBreathVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrStaffLocPitchedSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVerticalGroupSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,
});

export type AttrBreathVisData = v.InferOutput<typeof AttrBreathVisSchema>;
