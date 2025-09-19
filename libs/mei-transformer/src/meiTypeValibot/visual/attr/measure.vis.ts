import * as v from "valibot";
import { AttrBarringSchema } from "../../shared/attr/barring";
import { AttrWidthSchema } from "../../shared/attr/width";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.measure.vis.html
 */
export const AttrMeasureVisSchema = v.object({
	// Inherited attribute classes
	...AttrBarringSchema.entries,
	...AttrWidthSchema.entries,
});

export type AttrMeasureVisData = v.InferOutput<typeof AttrMeasureVisSchema>;
