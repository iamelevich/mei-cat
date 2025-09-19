import * as v from "valibot";
import { AttrNumberPlacementSchema } from "../../cmn/attr/numberPlacement";
import { AttrExtSymSchema } from "../../externalsymbols/attr/extSym";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrStaffLocSchema } from "../../shared/attr/staffLoc";
import { AttrStaffLocPitchedSchema } from "../../shared/attr/staffLoc.pitched";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrVisibilitySchema } from "../../shared/attr/visibility";
import { AttrWidthSchema } from "../../shared/attr/width";
import { AttrAltSymSchema } from "../../usersymbols/attr/altSym";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multiRest.vis.html
 */
export const AttrMultiRestVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrNumberPlacementSchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrStaffLocPitchedSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisibilitySchema.entries,
	...AttrWidthSchema.entries,

	// Direct attributes
	/**
	 * The block attribute controls whether the multimeasure rest should be rendered as a block rest or as church rests ("Kirchenpausen"), that are combinations of longa, breve and semibreve rests.
	 */
	"@block": v.optional(v.string()),
});

export type AttrMultiRestVisData = v.InferOutput<typeof AttrMultiRestVisSchema>;
