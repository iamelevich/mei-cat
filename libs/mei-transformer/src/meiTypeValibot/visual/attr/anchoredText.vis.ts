import * as v from "valibot";
import { AttrVisualOffsetSchema, AttrXySchema } from "../../shared";

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
