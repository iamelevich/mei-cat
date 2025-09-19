import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
	AttrPlacementRelStaffSchema,
	AttrStaffLocSchema,
	AttrStaffLocPitchedSchema,
	AttrTypographySchema,
	AttrVerticalGroupSchema,
	AttrVisualOffsetSchema,
	AttrXySchema,
} from "../../shared";
import { AttrExtSymSchema } from "../../externalsymbols";

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
