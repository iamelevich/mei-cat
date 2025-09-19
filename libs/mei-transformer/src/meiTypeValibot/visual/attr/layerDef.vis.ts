import * as v from "valibot";
import { AttrTextStyleSchema } from "../../shared/attr/textStyle";
import { AttrVisibilitySchema } from "../../shared/attr/visibility";
import { AttrBeamingVisSchema } from "../attr/beaming.vis";

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
