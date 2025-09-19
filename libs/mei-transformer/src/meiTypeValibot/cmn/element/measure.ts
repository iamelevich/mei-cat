import * as v from "valibot";
import { AttrMeasureAnlSchema } from "../../analytical/attr/measure.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrMeasureGesSchema } from "../../gestural/attr/measure.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMetadataPointingSchema } from "../../shared/attr/metadataPointing";
import { AttrPointingSchema } from "../../shared/attr/pointing";
import { AttrTargetEvalSchema } from "../../shared/attr/targetEval";
import { ModelAnnotLikeSchema } from "../../shared/model/annotLike";
import { ModelMilestoneLikeMusicSchema } from "../../shared/model/milestoneLike.music";
import { ModelRelationLikeSchema } from "../../shared/model/relationLike";
import { ModelStaffDefLikeSchema } from "../../shared/model/staffDefLike";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrMeasureVisSchema } from "../../visual/attr/measure.vis";
import { AttrMeasureLogSchema } from "../attr/measure.log";
import { MNumSchema } from "../element/mNum";
import { ModelMeasurePartSchema } from "../model/measurePart";

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
export const MeasureSchema = v.lazy(() =>
	v.intersect([
		MeasureBaseSchema,
		v.object({
			/**
			 * Reference to element mNum
			 * @see https://music-encoding.org/guidelines/v5/elements/mNum.html
			 */
			mNum: v.optional(MNumSchema),
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
	]),
);

export type MeasureData = v.InferOutput<typeof MeasureSchema>;
