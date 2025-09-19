import * as v from "valibot";
import { AttrExtSymSchema } from "../../externalsymbols";
import {
	AttrColorSchema,
	AttrEnclosingCharsSchema,
	AttrPlacementRelStaffSchema,
	AttrTypographySchema,
	AttrVerticalGroupSchema,
	AttrVisualOffsetSchema,
	AttrXySchema,
} from "../../shared";
import { AttrAltSymSchema } from "../../usersymbols";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.cpMark.vis.html
 */
export const AttrCpMarkVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrColorSchema.entries,
	...AttrEnclosingCharsSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrPlacementRelStaffSchema.entries,
	...AttrTypographySchema.entries,
	...AttrVerticalGroupSchema.entries,
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,
});

export type AttrCpMarkVisData = v.InferOutput<typeof AttrCpMarkVisSchema>;
