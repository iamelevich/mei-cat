import * as v from "valibot";
import { AttrChordAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrChordGesSchema } from "../../gestural";
import { ModelVerseLikeSchema } from "../../lyrics";
import { AttrChordVisSchema } from "../../visual";
import {
	AttrChordLogSchema,
	AttrCommonSchema,
	ModelChordPartSchema,
	ModelSylLikeSchema,
} from "..";

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
export const ChordSchema = v.intersect([
	ChordBaseSchema,
	ModelAppLikeSchema,
	ModelChordPartSchema,
	ModelEditLikeSchema,
	ModelSylLikeSchema,
	ModelTranscriptionLikeSchema,
	ModelVerseLikeSchema,
]);

export type ChordData = v.InferOutput<typeof ChordSchema>;
