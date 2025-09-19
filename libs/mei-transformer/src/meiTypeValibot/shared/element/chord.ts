import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrChordAnlSchema } from "../../analytical";
import { AttrChordGesSchema } from "../../gestural";
import {
	AttrChordLogSchema,
	AttrCommonSchema,
	ModelChordPartSchema,
	ModelSylLikeSchema,
} from "..";
import { AttrChordVisSchema } from "../../visual";
import { AttrFacsimileSchema } from "../../facsimile";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { ModelVerseLikeSchema } from "../../lyrics";

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
