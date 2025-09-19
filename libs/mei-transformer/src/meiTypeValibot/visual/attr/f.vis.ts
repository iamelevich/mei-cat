import * as v from "valibot";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrExtenderSchema } from "../../shared/attr/extender";
import { AttrPlacementRelStaffSchema } from "../../shared/attr/placementRelStaff";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrAltSymSchema } from "../../usersymbols/attr/altSym";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.f.vis.html
 */
export const AttrFVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExtenderSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,
});

export type AttrFVisData = v.InferOutput<typeof AttrFVisSchema>;
