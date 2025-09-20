import * as v from "valibot";
import { AttrNoteAnlSchema } from "../../analytical/attr/note.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrNoteGesSchema } from "../../gestural/attr/note.ges";
import { ModelVerseLikeSchema } from "../../lyrics/model/verseLike";
import { PlicaSchema } from "../../mensural/element/plica";
import { StemSchema } from "../../mensural/element/stem";
import { AttrNoteVisSchema } from "../../visual/attr/note.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrNoteLogSchema } from "../attr/note.log";
import { ModelNoteModifierLikeSchema } from "../model/noteModifierLike";
import { ModelSylLikeSchema } from "../model/sylLike";

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
export const NoteSchema = v.lazy(() =>
	v.intersect([
		NoteBaseSchema,
		v.object({
			/**
			 * Reference to element plica
			 * @see https://music-encoding.org/guidelines/v5/elements/plica.html
			 */
			plica: v.optional(v.union([v.array(PlicaSchema), PlicaSchema])),
			/**
			 * Reference to element stem
			 * @see https://music-encoding.org/guidelines/v5/elements/stem.html
			 */
			stem: v.optional(v.union([v.array(StemSchema), StemSchema])),
		}),
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelNoteModifierLikeSchema,
		ModelSylLikeSchema,
		ModelTranscriptionLikeSchema,
		ModelVerseLikeSchema,
	]),
);

export type NoteData = v.InferOutput<typeof NoteSchema>;
