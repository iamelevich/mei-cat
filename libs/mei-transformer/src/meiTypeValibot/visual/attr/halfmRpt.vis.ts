import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
	AttrTypographySchema,
	AttrVisualOffsetSchema,
} from "../../shared";
import { AttrExpandableSchema } from "../../cmn";
import { AttrExtSymSchema } from "../../externalsymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.halfmRpt.vis.html
 */
export const AttrHalfmRptVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExpandableSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetSchema.entries,
});

export type AttrHalfmRptVisData = v.InferOutput<typeof AttrHalfmRptVisSchema>;
