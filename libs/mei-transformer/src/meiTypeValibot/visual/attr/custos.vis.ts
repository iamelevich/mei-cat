import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
	AttrStaffLocSchema,
	AttrTypographySchema,
	AttrVisualOffsetHoSchema,
} from "../../shared";
import { AttrExtSymSchema } from "../../externalsymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.custos.vis.html
 */
export const AttrCustosVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetHoSchema.entries,
});

export type AttrCustosVisData = v.InferOutput<typeof AttrCustosVisSchema>;
