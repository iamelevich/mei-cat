import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
	AttrPlacementRelStaffSchema,
	AttrTypographySchema,
	AttrVisibilitySchema,
	AttrVisualOffsetSchema,
	AttrXySchema,
} from "../../shared";
import { AttrExtSymSchema } from "../../externalsymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabDurSym.vis.html
 */
export const AttrTabDurSymVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisibilitySchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,
});

export type AttrTabDurSymVisData = v.InferOutput<typeof AttrTabDurSymVisSchema>;
