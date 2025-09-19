import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
	AttrExtenderSchema,
	AttrPlacementRelStaffSchema,
	AttrVisualOffsetSchema,
	AttrXySchema,
} from "../../shared";

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
