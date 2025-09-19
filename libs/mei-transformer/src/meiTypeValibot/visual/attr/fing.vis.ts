import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
	AttrExtenderSchema,
	AttrPlacementRelStaffSchema,
	AttrVerticalGroupSchema,
	AttrVisualOffsetSchema,
	AttrXySchema,
} from "../../shared";

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
