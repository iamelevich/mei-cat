import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
	AttrEnclosingCharsSchema,
	AttrStaffLocSchema,
	AttrTypographySchema,
	AttrVisibilitySchema,
	AttrVisualOffsetHoSchema,
	AttrXySchema,
} from "../../shared";
import { AttrExtSymSchema } from "../../externalsymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.oriscus.vis.html
 */
export const AttrOriscusVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrEnclosingCharsSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisibilitySchema.entries,
	...AttrVisualOffsetHoSchema.entries,
	...AttrXySchema.entries,
});

export type AttrOriscusVisData = v.InferOutput<typeof AttrOriscusVisSchema>;
