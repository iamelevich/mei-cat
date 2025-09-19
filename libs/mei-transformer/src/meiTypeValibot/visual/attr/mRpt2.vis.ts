import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import { AttrColorSchema, AttrTypographySchema } from "../../shared";
import { AttrExpandableSchema } from "../../cmn";
import { AttrExtSymSchema } from "../../externalsymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRpt2.vis.html
 */
export const AttrMRpt2VisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExpandableSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrTypographySchema.entries,
});

export type AttrMRpt2VisData = v.InferOutput<typeof AttrMRpt2VisSchema>;
