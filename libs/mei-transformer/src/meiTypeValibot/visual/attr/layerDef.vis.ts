import * as v from "valibot";
import { AttrBeamingVisSchema } from "..";
import { AttrTextStyleSchema, AttrVisibilitySchema } from "../../shared";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layerDef.vis.html
 */
export const AttrLayerDefVisSchema = v.object({
	// Inherited attribute classes
	...AttrBeamingVisSchema.entries,
	...AttrTextStyleSchema.entries,
	...AttrVisibilitySchema.entries,
});

export type AttrLayerDefVisData = v.InferOutput<typeof AttrLayerDefVisSchema>;
