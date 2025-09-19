import * as v from "valibot";
import { type ArticData, ArticSchema, type NoteData, NoteSchema } from "..";

/**
 * Groups elements that may appear as part of the content of a chord element.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.chordPart.html
 */
export const ModelChordPartSchema: v.GenericSchema<ModelChordPartData> =
	v.object({
		/**
		 * An indication of how to play a note or chord.
		 * @see https://music-encoding.org/guidelines/v5/elements/artic.html
		 */
		artic: v.optional(
			v.union([v.lazy(() => ArticSchema), v.array(v.lazy(() => ArticSchema))]),
		),
		/**
		 * A single pitched event.
		 * @see https://music-encoding.org/guidelines/v5/elements/note.html
		 */
		note: v.optional(
			v.union([v.lazy(() => NoteSchema), v.array(v.lazy(() => NoteSchema))]),
		),
	});

export type ModelChordPartData = {
	artic?: ArticData | ArticData[];
	note?: NoteData | NoteData[];
};
