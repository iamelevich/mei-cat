import * as v from "valibot";
import { AttrExtSymSchema } from "../../externalsymbols";
import {
	AttrColorSchema,
	AttrTypographySchema,
	AttrVisualOffsetSchema,
	AttrXySchema,
} from "../../shared";
import { AttrAltSymSchema } from "../../usersymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.grpSym.vis.html
 */
export const AttrGrpSymVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,
});

export type AttrGrpSymVisData = v.InferOutput<typeof AttrGrpSymVisSchema>;
