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
import { AttrCurvatureDirectionSchema } from "..";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.liquescent.vis.html
 */
export const AttrLiquescentVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrCurvatureDirectionSchema.entries,
	...AttrEnclosingCharsSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisibilitySchema.entries,
	...AttrVisualOffsetHoSchema.entries,
	...AttrXySchema.entries,

	// Direct attributes
	/**
	 * Indicates whether curve is closed.
	 */
	"@looped": v.optional(v.string()),
});

export type AttrLiquescentVisData = v.InferOutput<
	typeof AttrLiquescentVisSchema
>;
