import * as v from "valibot";
import { AttrEndingAnlSchema } from "../../analytical/attr/ending.anl";
import { ModelSectionPartCmnSchema } from "../../cmn/model/sectionPart.cmn";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrEndingGesSchema } from "../../gestural/attr/ending.ges";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrEndingVisSchema } from "../../visual/attr/ending.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrEndingLogSchema } from "../attr/ending.log";
import { AttrPointingSchema } from "../attr/pointing";
import { AttrTargetEvalSchema } from "../attr/targetEval";
import { ExpansionSchema } from "../element/expansion";
import { ModelAnnotLikeSchema } from "../model/annotLike";
import { ModelMilestoneLikeMusicSchema } from "../model/milestoneLike.music";
import { ModelRelationLikeSchema } from "../model/relationLike";
import { ModelScoreDefLikeSchema } from "../model/scoreDefLike";
import { ModelSectionLikeSchema } from "../model/sectionLike";
import { ModelSectionPartMensuralAndNeumesSchema } from "../model/sectionPart.mensuralAndNeumes";
import { ModelStaffDefLikeSchema } from "../model/staffDefLike";

/**
 * Base schema with attribute, to simplify types for EndingSchema
 */
const EndingBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEndingAnlSchema.entries,
	...AttrEndingGesSchema.entries,
	...AttrEndingLogSchema.entries,
	...AttrEndingVisSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrPointingSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * Alternative ending for a repeated passage of music; <abbr>i.e.</abbr>, prima volta, seconda volta, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/ending.html
 */
export const EndingSchema = v.lazy(() =>
	v.intersect([
		EndingBaseSchema,
		v.object({
			/**
			 * Reference to element expansion
			 * @see https://music-encoding.org/guidelines/v5/elements/expansion.html
			 */
			expansion: v.optional(
				v.union([ExpansionSchema, v.array(ExpansionSchema)]),
			),
		}),
		ModelAnnotLikeSchema,
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelGraphicPrimitiveLikeSchema,
		ModelMilestoneLikeMusicSchema,
		ModelRelationLikeSchema,
		ModelScoreDefLikeSchema,
		ModelSectionLikeSchema,
		ModelSectionPartCmnSchema,
		ModelSectionPartMensuralAndNeumesSchema,
		ModelStaffDefLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type EndingData = v.InferOutput<typeof EndingSchema>;
