import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
	AttrEnclosingCharsSchema,
	AttrPlacementOnStaffSchema,
	AttrPlacementRelEventSchema,
	AttrStaffLocSchema,
	AttrStaffLocPitchedSchema,
	AttrTypographySchema,
	AttrVisualOffsetHoSchema,
	AttrVisualOffsetVoSchema,
	AttrXySchema,
} from "../../shared";
import { AttrExtSymSchema } from "../../externalsymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.accid.vis.html
 */
export const AttrAccidVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrEnclosingCharsSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrPlacementOnStaffSchema.entries,
	...AttrPlacementRelEventSchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrStaffLocPitchedSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetHoSchema.entries,
	...AttrVisualOffsetVoSchema.entries,
	...AttrXySchema.entries,
});

export type AttrAccidVisData = v.InferOutput<typeof AttrAccidVisSchema>;
