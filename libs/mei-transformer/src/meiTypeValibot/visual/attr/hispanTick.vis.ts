import * as v from "valibot";
import { AttrExtSymSchema } from "../../externalsymbols";
import {
	AttrColorSchema,
	AttrEnclosingCharsSchema,
	AttrStaffLocSchema,
	AttrTypographySchema,
	AttrVisibilitySchema,
	AttrVisualOffsetHoSchema,
	AttrXySchema,
} from "../../shared";
import { AttrAltSymSchema } from "../../usersymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hispanTick.vis.html
 */
export const AttrHispanTickVisSchema = v.object({
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
	 * Captures the placement of the tick mark with respect to the neume or neume component with which it is associated.
	 */
	"@place": v.optional(v.string()),
	/**
	 * Direction toward which the mark points.
	 */
	"@tilt": v.optional(v.string()),
});

export type AttrHispanTickVisData = v.InferOutput<
	typeof AttrHispanTickVisSchema
>;
