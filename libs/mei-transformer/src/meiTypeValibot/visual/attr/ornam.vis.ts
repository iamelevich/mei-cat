import * as v from "valibot";
import {
	AttrColorSchema,
	AttrEnclosingCharsSchema,
	AttrPlacementRelStaffSchema,
	AttrVerticalGroupSchema,
	AttrVisualOffset2HoSchema,
	AttrVisualOffset2ToSchema,
	AttrVisualOffsetSchema,
	AttrXySchema,
} from "../../shared";
import { AttrAltSymSchema } from "../../usersymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ornam.vis.html
 */
export const AttrOrnamVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrEnclosingCharsSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrVerticalGroupSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrVisualOffset2HoSchema.entries,
	...AttrVisualOffset2ToSchema.entries,
	...AttrXySchema.entries,
});

export type AttrOrnamVisData = v.InferOutput<typeof AttrOrnamVisSchema>;
