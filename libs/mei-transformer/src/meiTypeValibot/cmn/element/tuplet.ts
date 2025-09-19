import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, ModelEventLikeSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrTupletAnlSchema } from "../../analytical";
import { AttrTupletGesSchema } from "../../gestural";
import { AttrTupletLogSchema, ModelEventLikeCmnSchema } from "..";
import { AttrTupletVisSchema } from "../../visual";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

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
