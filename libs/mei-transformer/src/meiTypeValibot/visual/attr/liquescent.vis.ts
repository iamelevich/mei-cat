import * as v from "valibot";
import { AttrExtSymSchema } from "../../externalsymbols/attr/extSym";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrEnclosingCharsSchema } from "../../shared/attr/enclosingChars";
import { AttrStaffLocSchema } from "../../shared/attr/staffLoc";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrVisibilitySchema } from "../../shared/attr/visibility";
import { AttrVisualOffsetHoSchema } from "../../shared/attr/visualOffset.ho";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrAltSymSchema } from "../../usersymbols/attr/altSym";
import { AttrCurvatureDirectionSchema } from "../attr/curvatureDirection";

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
