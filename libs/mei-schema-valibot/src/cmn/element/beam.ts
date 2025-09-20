import * as v from "valibot";
import { AttrBeamAnlSchema } from "../../analytical/attr/beam.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBeamGesSchema } from "../../gestural/attr/beam.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelEventLikeSchema } from "../../shared/model/eventLike";
import { AttrBeamVisSchema } from "../../visual/attr/beam.vis";
import { AttrBeamLogSchema } from "../attr/beam.log";
import { ModelEventLikeCmnSchema } from "../model/eventLike.cmn";

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
export const BeamSchema = v.lazy(() =>
	v.intersect([
		BeamBaseSchema,
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelEventLikeSchema,
		ModelEventLikeCmnSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type BeamData = v.InferOutput<typeof BeamSchema>;
