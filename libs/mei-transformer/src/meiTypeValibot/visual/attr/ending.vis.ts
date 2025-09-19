import * as v from "valibot";
import { AttrLineRendSchema } from "../../shared";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ending.vis.html
 */
export const AttrEndingVisSchema = v.object({
	// Inherited attribute classes
	...AttrLineRendSchema.entries,
});

export type AttrEndingVisData = v.InferOutput<typeof AttrEndingVisSchema>;
