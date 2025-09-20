import * as v from "valibot";
import { AttrChordAnlSchema } from "../../analytical/attr/chord.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrChordGesSchema } from "../../gestural/attr/chord.ges";
import { ModelVerseLikeSchema } from "../../lyrics/model/verseLike";
import { AttrChordVisSchema } from "../../visual/attr/chord.vis";
import { AttrChordLogSchema } from "../attr/chord.log";
import { AttrCommonSchema } from "../attr/common";
import { ModelChordPartSchema } from "../model/chordPart";
import { ModelSylLikeSchema } from "../model/sylLike";

/**
 * Base schema with attribute, to simplify types for ChordSchema
 */
const ChordBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrChordAnlSchema.entries,
	...AttrChordGesSchema.entries,
	...AttrChordLogSchema.entries,
	...AttrChordVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * A simultaneous sounding of two or more notes in the same layer *with the same duration*.
 * @see https://music-encoding.org/guidelines/v5/elements/chord.html
 */
export const ChordSchema = v.lazy(() =>
	v.intersect([
		ChordBaseSchema,
		ModelAppLikeSchema,
		ModelChordPartSchema,
		ModelEditLikeSchema,
		ModelSylLikeSchema,
		ModelTranscriptionLikeSchema,
		ModelVerseLikeSchema,
	]),
);

export type ChordData = v.InferOutput<typeof ChordSchema>;
