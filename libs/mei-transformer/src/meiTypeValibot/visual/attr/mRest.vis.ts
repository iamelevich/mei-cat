import * as v from "valibot";
import { AttrCutoutSchema } from "../../cmn/attr/cutout";
import { AttrExtSymSchema } from "../../externalsymbols/attr/extSym";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrStaffLocSchema } from "../../shared/attr/staffLoc";
import { AttrStaffLocPitchedSchema } from "../../shared/attr/staffLoc.pitched";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrAltSymSchema } from "../../usersymbols/attr/altSym";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRest.vis.html
 */
export const AttrMRestVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrCutoutSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrStaffLocPitchedSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,
});

export type AttrMRestVisData = v.InferOutput<typeof AttrMRestVisSchema>;
