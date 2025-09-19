import * as v from "valibot";
import { AttrExtSymSchema } from "../../externalsymbols/attr/extSym";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrScalableSchema } from "../../shared/attr/scalable";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrAltSymSchema } from "../../usersymbols/attr/altSym";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.symbol.vis.html
 */
export const AttrSymbolVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrScalableSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,
});

export type AttrSymbolVisData = v.InferOutput<typeof AttrSymbolVisSchema>;
