import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBeamAnlSchema } from "../../analytical";
import { AttrBeamGesSchema } from "../../gestural";
import { AttrBeamLogSchema, ModelEventLikeCmnSchema } from "..";
import { AttrBeamVisSchema } from "../../visual";
import { AttrCommonSchema, ModelEventLikeSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

/**
 * Base schema with attribute, to simplify types for BeamSchema
 */
const BeamBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBeamAnlSchema.entries,
	...AttrBeamGesSchema.entries,
	...AttrBeamLogSchema.entries,
	...AttrBeamVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * A container for a series of explicitly beamed events that begins and ends entirely within a measure.
 * @see https://music-encoding.org/guidelines/v5/elements/beam.html
 */
export const BeamSchema = v.intersect([
	BeamBaseSchema,
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelEventLikeSchema,
	ModelEventLikeCmnSchema,
	ModelTranscriptionLikeSchema,
]);

export type BeamData = v.InferOutput<typeof BeamSchema>;
