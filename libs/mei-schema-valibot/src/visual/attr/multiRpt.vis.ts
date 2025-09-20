import * as v from "valibot";
import { AttrExpandableSchema } from "../../cmn/attr/expandable";
import { AttrExtSymSchema } from "../../externalsymbols/attr/extSym";
import { AttrColorSchema } from "../../shared/attr/color";
import { AttrTypographySchema } from "../../shared/attr/typography";
import { AttrAltSymSchema } from "../../usersymbols/attr/altSym";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.multiRpt.vis.html
 */
export const AttrMultiRptVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExpandableSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrTypographySchema.entries,
});

export type AttrMultiRptVisData = v.InferOutput<typeof AttrMultiRptVisSchema>;
