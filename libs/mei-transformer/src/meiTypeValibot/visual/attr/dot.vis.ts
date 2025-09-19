import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
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
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dot.vis.html
 */
export const AttrDotVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrStaffLocPitchedSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetHoSchema.entries,
	...AttrVisualOffsetVoSchema.entries,
	...AttrXySchema.entries,
});

export type AttrDotVisData = v.InferOutput<typeof AttrDotVisSchema>;
