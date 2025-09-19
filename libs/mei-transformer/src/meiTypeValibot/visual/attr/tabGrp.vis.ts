import * as v from "valibot";
import { AttrExtSymSchema } from "../../externalsymbols";
import {
	AttrVisibilitySchema,
	AttrVisualOffsetHoSchema,
	AttrVisualOffsetToSchema,
	AttrXySchema,
} from "../../shared";
import { AttrAltSymSchema } from "../../usersymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabGrp.vis.html
 */
export const AttrTabGrpVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrVisibilitySchema.entries,
	...AttrVisualOffsetHoSchema.entries,
	...AttrVisualOffsetToSchema.entries,
	...AttrXySchema.entries,
});

export type AttrTabGrpVisData = v.InferOutput<typeof AttrTabGrpVisSchema>;
