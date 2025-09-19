import * as v from "valibot";
import { AttrDurationGesSchema, AttrTimestamp2GesSchema } from "..";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bracketSpan.ges.html
 */
export const AttrBracketSpanGesSchema = v.object({
	// Inherited attribute classes
	...AttrDurationGesSchema.entries,
	...AttrTimestamp2GesSchema.entries,
});

export type AttrBracketSpanGesData = v.InferOutput<
	typeof AttrBracketSpanGesSchema
>;
