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
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.quilisma.vis.html
 */
export const AttrQuilismaVisSchema = v.object({
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

	// Direct attributes
	/**
	 * Number of "crests" of a wavy line.
	 */
	"@waves": v.optional(v.string()),
});

export type AttrQuilismaVisData = v.InferOutput<typeof AttrQuilismaVisSchema>;
