import * as v from "valibot";
import { AttrFTremAnlSchema } from "../../analytical/attr/fTrem.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrFTremGesSchema } from "../../gestural/attr/fTrem.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ChordSchema } from "../../shared/element/chord";
import { ClefSchema } from "../../shared/element/clef";
import { NoteSchema } from "../../shared/element/note";
import { AttrFTremVisSchema } from "../../visual/attr/fTrem.vis";
import { AttrFTremLogSchema } from "../attr/fTrem.log";

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
export const FTremSchema = v.lazy(() =>
	v.intersect([
		FTremBaseSchema,
		v.object({
			/**
			 * Reference to element chord
			 * @see https://music-encoding.org/guidelines/v5/elements/chord.html
			 */
			chord: v.optional(ChordSchema),
			/**
			 * Reference to element clef
			 * @see https://music-encoding.org/guidelines/v5/elements/clef.html
			 */
			clef: v.optional(ClefSchema),
			/**
			 * Reference to element note
			 * @see https://music-encoding.org/guidelines/v5/elements/note.html
			 */
			note: v.optional(NoteSchema),
		}),
	]),
);

export type FTremData = v.InferOutput<typeof FTremSchema>;
