import * as v from "valibot";
import { AttrScoreAnlSchema } from "../../analytical/attr/score.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrScoreGesSchema } from "../../gestural/attr/score.ges";
import { ModelDivLikeSchema } from "../../text/model/divLike";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrScoreVisSchema } from "../../visual/attr/score.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrMetadataPointingSchema } from "../attr/metadataPointing";
import { AttrScoreLogSchema } from "../attr/score.log";
import { ModelAnnotLikeSchema } from "../model/annotLike";
import { ModelMilestoneLikeMusicSchema } from "../model/milestoneLike.music";
import { ModelRelationLikeSchema } from "../model/relationLike";
import { ModelScoreDefLikeSchema } from "../model/scoreDefLike";
import { ModelScorePartSchema } from "../model/scorePart";
import { ModelStaffDefLikeSchema } from "../model/staffDefLike";

/**
 * Base schema with attribute, to simplify types for ScoreSchema
 */
const ScoreBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrScoreAnlSchema.entries,
	...AttrScoreGesSchema.entries,
	...AttrScoreLogSchema.entries,
	...AttrScoreVisSchema.entries,
});

/**
 * Full score view of the musical content.
 * @see https://music-encoding.org/guidelines/v5/elements/score.html
 */
export const ScoreSchema = v.lazy(() =>
	v.intersect([
		ScoreBaseSchema,
		ModelAnnotLikeSchema,
		ModelAppLikeSchema,
		ModelDivLikeSchema,
		ModelEditLikeSchema,
		ModelGraphicPrimitiveLikeSchema,
		ModelMilestoneLikeMusicSchema,
		ModelRelationLikeSchema,
		ModelScoreDefLikeSchema,
		ModelScorePartSchema,
		ModelStaffDefLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type ScoreData = v.InferOutput<typeof ScoreSchema>;
