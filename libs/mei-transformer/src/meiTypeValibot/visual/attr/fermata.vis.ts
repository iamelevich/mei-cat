import * as v from "valibot";
import { AttrExtSymSchema } from "../../externalsymbols/attr/extSym";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrEnclosingCharsSchema } from "../../shared/attr/enclosingChars";
import { AttrPlacementRelStaffSchema } from "../../shared/attr/placementRelStaff";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrVerticalGroupSchema } from "../../shared/attr/verticalGroup";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrAltSymSchema } from "../../usersymbols/attr/altSym";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fermata.vis.html
 */
export const AttrFermataVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrEnclosingCharsSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVerticalGroupSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,

	// Direct attributes
	/**
	 * Describes the visual appearance of the fermata; that is, whether it occurs as upright or inverted.
	 */
	"@form": v.optional(v.string()),
	/**
	 * Describes the visual appearance of the fermata; that is, whether it has a curved, square, or angular shape.
	 */
	"@shape": v.optional(v.string()),
});

export type AttrFermataVisData = v.InferOutput<typeof AttrFermataVisSchema>;
