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

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.episema.vis.html
 */
export const AttrEpisemaVisSchema = v.object({
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
	 * Horizontal stroke.
	 */
	"@form": v.optional(v.string()),
	/**
	 * Captures the placement of the episema with respect to the neume or neume component with which it is associated.
	 */
	"@place": v.optional(v.string()),
});

export type AttrEpisemaVisData = v.InferOutput<typeof AttrEpisemaVisSchema>;
