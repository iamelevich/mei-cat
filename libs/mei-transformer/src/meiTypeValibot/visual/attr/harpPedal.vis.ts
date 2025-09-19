import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
	AttrPlacementRelStaffSchema,
	AttrTypographySchema,
	AttrVerticalGroupSchema,
	AttrVisualOffsetSchema,
	AttrXySchema,
} from "../../shared";
import { AttrExtSymSchema } from "../../externalsymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harpPedal.vis.html
 */
export const AttrHarpPedalVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVerticalGroupSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,
});

export type AttrHarpPedalVisData = v.InferOutput<typeof AttrHarpPedalVisSchema>;
