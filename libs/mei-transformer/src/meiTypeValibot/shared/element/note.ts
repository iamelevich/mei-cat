import * as v from "valibot";
import { AttrNoteAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrNoteGesSchema } from "../../gestural";
import { ModelVerseLikeSchema } from "../../lyrics";
import { PlicaSchema, StemSchema } from "../../mensural";
import { AttrNoteVisSchema } from "../../visual";
import {
	AttrCommonSchema,
	AttrNoteLogSchema,
	ModelNoteModifierLikeSchema,
	ModelSylLikeSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for NoteSchema
 */
const NoteBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrNoteAnlSchema.entries,
	...AttrNoteGesSchema.entries,
	...AttrNoteLogSchema.entries,
	...AttrNoteVisSchema.entries,
});

/**
 * A single pitched event. <!-- (Read, p. 63) -->
 * @see https://music-encoding.org/guidelines/v5/elements/note.html
 */
export const NoteSchema = v.intersect([
	NoteBaseSchema,
	v.object({
		/**
		 * Reference to element plica
		 * @see https://music-encoding.org/guidelines/v5/elements/plica.html
		 */
		plica: v.optional(
			v.union([v.lazy(() => PlicaSchema), v.array(v.lazy(() => PlicaSchema))]),
		),
		/**
		 * Reference to element stem
		 * @see https://music-encoding.org/guidelines/v5/elements/stem.html
		 */
		stem: v.optional(
			v.union([v.lazy(() => StemSchema), v.array(v.lazy(() => StemSchema))]),
		),
	}),
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelNoteModifierLikeSchema,
	ModelSylLikeSchema,
	ModelTranscriptionLikeSchema,
	ModelVerseLikeSchema,
]);

export type NoteData = v.InferOutput<typeof NoteSchema>;
