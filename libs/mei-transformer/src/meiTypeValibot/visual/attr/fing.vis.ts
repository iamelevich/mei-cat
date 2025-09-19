import * as v from "valibot";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrExtenderSchema } from "../../shared/attr/extender";
import { AttrPlacementRelStaffSchema } from "../../shared/attr/placementRelStaff";
import { AttrVerticalGroupSchema } from "../../shared/attr/verticalGroup";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrAltSymSchema } from "../../usersymbols/attr/altSym";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fing.vis.html
 */
export const AttrFingVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExtenderSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrVerticalGroupSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,
});

export type AttrFingVisData = v.InferOutput<typeof AttrFingVisSchema>;
