import * as v from "valibot";
import { AttrCutoutSchema } from "../../cmn";
import { AttrExtSymSchema } from "../../externalsymbols";
import {
	AttrColorSchema,
	AttrStaffLocPitchedSchema,
	AttrStaffLocSchema,
	AttrTypographySchema,
	AttrVisualOffsetSchema,
	AttrXySchema,
} from "../../shared";
import { AttrAltSymSchema } from "../../usersymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mRest.vis.html
 */
export const AttrMRestVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrCutoutSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrStaffLocPitchedSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,
});

export type AttrMRestVisData = v.InferOutput<typeof AttrMRestVisSchema>;
