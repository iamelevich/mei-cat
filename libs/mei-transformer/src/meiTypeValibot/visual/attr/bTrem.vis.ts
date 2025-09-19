import * as v from "valibot";
import { AttrNumberPlacementSchema } from "../../cmn";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bTrem.vis.html
 */
export const AttrBTremVisSchema = v.object({
	// Inherited attribute classes
	...AttrNumberPlacementSchema.entries,
});

export type AttrBTremVisData = v.InferOutput<typeof AttrBTremVisSchema>;
