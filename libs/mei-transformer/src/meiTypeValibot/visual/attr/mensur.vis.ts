import * as v from "valibot";
import { AttrExtSymSchema } from "../../externalsymbols/attr/extSym";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrSlashCountSchema } from "../../shared/attr/slashCount";
import { AttrStaffLocSchema } from "../../shared/attr/staffLoc";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrAltSymSchema } from "../../usersymbols/attr/altSym";

/**
 * Visual domain attributes. These attributes describe the physical appearance of the mensuration sign/time signature of mensural notation..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensur.vis.html
 */
export const AttrMensurVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrSlashCountSchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrTypographySchema.entries,

	// Direct attributes
	/**
	 * Specifies whether a dot is to be added to the base symbol.
	 */
	"@dot": v.optional(v.string()),
	/**
	 * Indicates whether the base symbol is written vertically or horizontally.
	 */
	"@form": v.optional(v.string()),
	/**
	 * Describes the rotation or reflection of the base symbol.
	 */
	"@orient": v.optional(v.string()),
	/**
	 * The base symbol in the mensuration sign/time signature of mensural notation.
	 */
	"@sign": v.optional(v.string()),
});

export type AttrMensurVisData = v.InferOutput<typeof AttrMensurVisSchema>;
