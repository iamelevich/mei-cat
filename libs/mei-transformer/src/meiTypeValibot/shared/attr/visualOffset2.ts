import * as v from "valibot";
import {
	AttrVisualOffset2HoSchema,
	AttrVisualOffset2ToSchema,
	AttrVisualOffset2VoSchema,
} from "..";

/**
 * Visual offset attributes. Some items may have their location recorded in terms of pairs of offsets from their programmatically-determined location. The startho and endho attributes record the horizontal offsets of the start and end points of the item, respectively. Similarly, the startvo and endvo attributes record the vertical offsets of the start and end points of the item. The startto and endto attributes hold timestamp offsets, the most common use of which is as alternatives to the ho attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset2.html
 */
export const AttrVisualOffset2Schema = v.object({
	// Inherited attribute classes
	...AttrVisualOffset2HoSchema.entries,
	...AttrVisualOffset2ToSchema.entries,
	...AttrVisualOffset2VoSchema.entries,
});

export type AttrVisualOffset2Data = v.InferOutput<
	typeof AttrVisualOffset2Schema
>;
