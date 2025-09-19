import * as v from "valibot";
import { AttrMeasureAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrMeasureGesSchema } from "../../gestural";
import {
	AttrCommonSchema,
	AttrMetadataPointingSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
	ModelAnnotLikeSchema,
	ModelMilestoneLikeMusicSchema,
	ModelRelationLikeSchema,
	ModelStaffDefLikeSchema,
} from "../../shared";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import { AttrMeasureVisSchema } from "../../visual";
import { AttrMeasureLogSchema, ModelMeasurePartSchema } from "..";
import { MNumSchema } from ".";

/**
 * Base schema with attribute, to simplify types for MeasureSchema
 */
const MeasureBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMeasureAnlSchema.entries,
	...AttrMeasureGesSchema.entries,
	...AttrMeasureLogSchema.entries,
	...AttrMeasureVisSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrPointingSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * Unit of musical time consisting of a fixed number of note values of a given type, as determined by the prevailing meter, and delimited in musical notation by bar lines.
 * @see https://music-encoding.org/guidelines/v5/elements/measure.html
 */
export const MeasureSchema = v.intersect([
	MeasureBaseSchema,
	v.object({
		/**
		 * Reference to element mNum
		 * @see https://music-encoding.org/guidelines/v5/elements/mNum.html
		 */
		mNum: v.optional(v.lazy(() => MNumSchema)),
	}),
	ModelAnnotLikeSchema,
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelMeasurePartSchema,
	ModelMilestoneLikeMusicSchema,
	ModelRelationLikeSchema,
	ModelStaffDefLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type MeasureData = v.InferOutput<typeof MeasureSchema>;
