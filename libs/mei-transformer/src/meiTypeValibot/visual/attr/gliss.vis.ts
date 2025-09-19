import * as v from "valibot";
import { AttrExtSymSchema } from "../../externalsymbols";
import {
	AttrColorSchema,
	AttrLineRendSchema,
	AttrTypographySchema,
	AttrVisualOffset2Schema,
	AttrVisualOffsetSchema,
	AttrXy2Schema,
	AttrXySchema,
} from "../../shared";
import { AttrAltSymSchema } from "../../usersymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.gliss.vis.html
 */
export const AttrGlissVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrLineRendSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrVisualOffset2Schema.entries,
	...AttrXySchema.entries,
	...AttrXy2Schema.entries,
});

export type AttrGlissVisData = v.InferOutput<typeof AttrGlissVisSchema>;
