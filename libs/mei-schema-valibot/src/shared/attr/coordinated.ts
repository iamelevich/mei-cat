import * as v from "valibot";
import { AttrCoordinatedUlSchema } from "./coordinated.ul";

/**
 * This attribute class records the position of a feature within a two-dimensional coordinate system..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.coordinated.html
 */
export const AttrCoordinatedSchema = v.object({
	// Inherited attribute classes
	...AttrCoordinatedUlSchema.entries,

	// Direct attributes
	/**
	 * Indicates the lower-right corner x coordinate.
	 */
	"@lrx": v.optional(v.string()),
	/**
	 * Indicates the lower-right corner y coordinate.
	 */
	"@lry": v.optional(v.string()),
	/**
	 * Indicates the amount by which the contents of this element have been rotated clockwise or, if applicable, how the orientation of the element self should be interpreted, with respect to the normal orientation of the parent surface. The orientation is expressed in arc degrees.
	 */
	"@rotate": v.optional(v.string()),
});

export type AttrCoordinatedData = v.InferOutput<typeof AttrCoordinatedSchema>;
