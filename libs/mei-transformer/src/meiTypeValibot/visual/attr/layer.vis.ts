import * as v from "valibot";
import { AttrVisibilitySchema } from "../../shared";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layer.vis.html
 */
export const AttrLayerVisSchema = v.object({
	// Inherited attribute classes
	...AttrVisibilitySchema.entries,
});

export type AttrLayerVisData = v.InferOutput<typeof AttrLayerVisSchema>;
