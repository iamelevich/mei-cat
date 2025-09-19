import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import {
	AttrColorSchema,
	AttrEnclosingCharsSchema,
	AttrStaffLocSchema,
	AttrStaffLocPitchedSchema,
	AttrTypographySchema,
	AttrVisualOffsetSchema,
	AttrXySchema,
} from "../../shared";
import { AttrExtSymSchema } from "../../externalsymbols";
import { AttrRestVisCmnSchema } from "../../cmn";
import { AttrRestVisMensuralSchema } from "../../mensural";

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
