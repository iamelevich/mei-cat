import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrMetadataPointingSchema,
	AttrScoreLogSchema,
	ModelAnnotLikeSchema,
	ModelMilestoneLikeMusicSchema,
	ModelRelationLikeSchema,
	ModelScoreDefLikeSchema,
	ModelScorePartSchema,
	ModelStaffDefLikeSchema,
} from "..";
import { AttrScoreAnlSchema } from "../../analytical";
import { AttrScoreGesSchema } from "../../gestural";
import { AttrScoreVisSchema } from "../../visual";
import { ModelAppLikeSchema } from "../../critapp";
import { ModelDivLikeSchema } from "../../text";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";

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
export const ScoreSchema = v.intersect([
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
]);

export type ScoreData = v.InferOutput<typeof ScoreSchema>;
