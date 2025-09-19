import * as v from "valibot";
import { AttrTupletAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrTupletGesSchema } from "../../gestural";
import { AttrCommonSchema, ModelEventLikeSchema } from "../../shared";
import { AttrTupletVisSchema } from "../../visual";
import { AttrTupletLogSchema, ModelEventLikeCmnSchema } from "..";

/**
 * Base schema with attribute, to simplify types for TupletSchema
 */
const TupletBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrTupletAnlSchema.entries,
	...AttrTupletGesSchema.entries,
	...AttrTupletLogSchema.entries,
	...AttrTupletVisSchema.entries,
});

/**
 * A group of notes with "irregular" (sometimes called "irrational") rhythmic values, for example, three notes in the time normally occupied by two or nine in the time of five.
 * @see https://music-encoding.org/guidelines/v5/elements/tuplet.html
 */
export const TupletSchema = v.intersect([
	TupletBaseSchema,
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelEventLikeSchema,
	ModelEventLikeCmnSchema,
	ModelTranscriptionLikeSchema,
]);

export type TupletData = v.InferOutput<typeof TupletSchema>;
