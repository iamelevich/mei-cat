import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrMidiEventSchema, AttrMidiNumberSchema } from "..";

/**
 * Base schema with attribute, to simplify types for NoteOffSchema
 */
const NoteOffBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMidiEventSchema.entries,
	...AttrMidiNumberSchema.entries,
});

/**
 * MIDI note-off event.
 * @see https://music-encoding.org/guidelines/v5/elements/noteOff.html
 */
export const NoteOffSchema = v.intersect([NoteOffBaseSchema]);

export type NoteOffData = v.InferOutput<typeof NoteOffSchema>;
