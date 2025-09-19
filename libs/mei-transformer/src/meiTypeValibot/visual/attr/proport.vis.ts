import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
	AttrStaffLocSchema,
	AttrTypographySchema,
} from "../../shared";
import { AttrExtSymSchema } from "../../externalsymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.proport.vis.html
 */
export const AttrProportVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrTypographySchema.entries,
});

export type AttrProportVisData = v.InferOutput<typeof AttrProportVisSchema>;
