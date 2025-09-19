import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrMidiEventSchema, AttrMidiNumberSchema } from "..";

/**
 * Base schema with attribute, to simplify types for NoteOnSchema
 */
const NoteOnBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMidiEventSchema.entries,
	...AttrMidiNumberSchema.entries,
});

/**
 * MIDI note-on event.
 * @see https://music-encoding.org/guidelines/v5/elements/noteOn.html
 */
export const NoteOnSchema = v.intersect([NoteOnBaseSchema]);

export type NoteOnData = v.InferOutput<typeof NoteOnSchema>;
