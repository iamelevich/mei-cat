import * as v from "valibot";
import { AttrVisualOffsetSchema } from "../../shared/attr/visualOffset";
import { AttrXySchema } from "../../shared/attr/xy";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.anchoredText.vis.html
 */
export const AttrAnchoredTextVisSchema = v.object({
	// Inherited attribute classes
	...AttrVisualOffsetSchema.entries,
	...AttrXySchema.entries,
});

export type AttrAnchoredTextVisData = v.InferOutput<
	typeof AttrAnchoredTextVisSchema
>;
