import * as v from "valibot";
import { AttrHeightSchema } from "../attr/height";
import { AttrWidthSchema } from "../attr/width";

/**
 * Attributes that capture the dimensions of an entity..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dimensions.html
 */
export const AttrDimensionsSchema = v.object({
	// Inherited attribute classes
	...AttrHeightSchema.entries,
	...AttrWidthSchema.entries,
});

export type AttrDimensionsData = v.InferOutput<typeof AttrDimensionsSchema>;
