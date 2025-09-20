import * as v from "valibot";
import { AttrTupletVisSchema } from "./tuplet.vis";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tupletSpan.vis.html
 */
export const AttrTupletSpanVisSchema = v.object({
	// Inherited attribute classes
	...AttrTupletVisSchema.entries,
});

export type AttrTupletSpanVisData = v.InferOutput<
	typeof AttrTupletSpanVisSchema
>;
