import * as v from "valibot";
import { AttrExtSymSchema } from "../../externalsymbols/attr/extSym";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrEnclosingCharsSchema } from "../../shared/attr/enclosingChars";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrVisibilitySchema } from "../../shared/attr/visibility";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";
import { AttrAltSymSchema } from "../../usersymbols/attr/altSym";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clef.vis.html
 */
export const AttrClefVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrEnclosingCharsSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisibilitySchema.entries,
	...AttrVisualOffsetSchema.entries,
});

export type AttrClefVisData = v.InferOutput<typeof AttrClefVisSchema>;
