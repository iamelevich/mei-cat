import * as v from "valibot";
import { AttrRestVisCmnSchema } from "../../cmn";
import { AttrExtSymSchema } from "../../externalsymbols";
import { AttrRestVisMensuralSchema } from "../../mensural";
import {
	AttrColorSchema,
	AttrEnclosingCharsSchema,
	AttrStaffLocPitchedSchema,
	AttrStaffLocSchema,
	AttrTypographySchema,
	AttrVisualOffsetSchema,
	AttrXySchema,
} from "../../shared";
import { AttrAltSymSchema } from "../../usersymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rest.vis.html
 */
export const AttrRestVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrEnclosingCharsSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrRestVisCmnSchema.entries,
	...AttrRestVisMensuralSchema.entries,
	...AttrStaffLocSchema.entries,
	...AttrStaffLocPitchedSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,
});

export type AttrRestVisData = v.InferOutput<typeof AttrRestVisSchema>;
