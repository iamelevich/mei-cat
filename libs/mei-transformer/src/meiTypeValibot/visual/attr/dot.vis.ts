import * as v from "valibot";
import { AttrExtSymSchema } from "../../externalsymbols/attr/extSym";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrStaffLocSchema } from "../../shared/attr/staffLoc";
import { AttrStaffLocPitchedSchema } from "../../shared/attr/staffLoc.pitched";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrVisualOffsetHoSchema } from "../../shared/attr/visualOffset.ho";
import { AttrVisualOffsetVoSchema } from "../../shared/attr/visualOffset.vo";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrAltSymSchema } from "../../usersymbols/attr/altSym";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dot.vis.html
 */
export const AttrDotVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrStaffLocPitchedSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetHoSchema.entries,
	...AttrVisualOffsetVoSchema.entries,
	...AttrXySchema.entries,
});

export type AttrDotVisData = v.InferOutput<typeof AttrDotVisSchema>;
