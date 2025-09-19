import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	ChordSchema,
	ClefSchema,
	NoteSchema,
} from "../../shared";
import { AttrFTremAnlSchema } from "../../analytical";
import { AttrFTremGesSchema } from "../../gestural";
import { AttrFTremLogSchema } from "..";
import { AttrFTremVisSchema } from "../../visual";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for FTremSchema
 */
const FTremBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFTremAnlSchema.entries,
	...AttrFTremGesSchema.entries,
	...AttrFTremLogSchema.entries,
	...AttrFTremVisSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * A rapid alternation between a pair of notes (or chords or perhaps between a note and a chord) that are (usually) farther apart than a major second.
 * @see https://music-encoding.org/guidelines/v5/elements/fTrem.html
 */
export const FTremSchema = v.intersect([
	FTremBaseSchema,
	v.object({
		/**
		 * Reference to element chord
		 * @see https://music-encoding.org/guidelines/v5/elements/chord.html
		 */
		chord: v.optional(v.lazy(() => ChordSchema)),
		/**
		 * Reference to element clef
		 * @see https://music-encoding.org/guidelines/v5/elements/clef.html
		 */
		clef: v.optional(v.lazy(() => ClefSchema)),
		/**
		 * Reference to element note
		 * @see https://music-encoding.org/guidelines/v5/elements/note.html
		 */
		note: v.optional(v.lazy(() => NoteSchema)),
	}),
]);

export type FTremData = v.InferOutput<typeof FTremSchema>;
