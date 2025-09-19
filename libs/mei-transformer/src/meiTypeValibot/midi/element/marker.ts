import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, AttrLangSchema } from "../../shared";
import { AttrMidiEventSchema } from "..";

/**
 * Base schema with attribute, to simplify types for MarkerSchema
 */
const MarkerBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
	...AttrMidiEventSchema.entries,
});

/**
 * MIDI marker meta-event.
 * @see https://music-encoding.org/guidelines/v5/elements/marker.html
 */
export const MarkerSchema = v.intersect([MarkerBaseSchema]);

export type MarkerData = v.InferOutput<typeof MarkerSchema>;
