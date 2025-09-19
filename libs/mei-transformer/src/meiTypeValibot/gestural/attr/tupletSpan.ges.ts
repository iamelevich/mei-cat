import * as v from "valibot";
import { AttrTimestamp2GesSchema, AttrTupletGesSchema } from "..";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tupletSpan.ges.html
 */
export const AttrTupletSpanGesSchema = v.object({
	// Inherited attribute classes
	...AttrTimestamp2GesSchema.entries,
	...AttrTupletGesSchema.entries,
});

export type AttrTupletSpanGesData = v.InferOutput<
	typeof AttrTupletSpanGesSchema
>;
