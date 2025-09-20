import * as v from "valibot";
import { AttrCutoutSchema } from "../../cmn/attr/cutout";
import { AttrXySchema } from "../../shared/attr/xy";
import { AttrAltSymSchema } from "../../usersymbols/attr/altSym";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mSpace.vis.html
 */
export const AttrMSpaceVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrCutoutSchema.entries,
	...AttrXySchema.entries,
});

export type AttrMSpaceVisData = v.InferOutput<typeof AttrMSpaceVisSchema>;
