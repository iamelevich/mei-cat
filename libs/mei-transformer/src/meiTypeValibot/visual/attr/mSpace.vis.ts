import * as v from "valibot";
import { AttrCutoutSchema } from "../../cmn";
import { AttrXySchema } from "../../shared";
import { AttrAltSymSchema } from "../../usersymbols";

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
