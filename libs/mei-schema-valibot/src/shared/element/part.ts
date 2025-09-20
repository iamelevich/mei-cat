import * as v from "valibot";
import { AttrPartAnlSchema } from "../../analytical/attr/part.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrPartGesSchema } from "../../gestural/attr/part.ges";
import { ModelDivLikeSchema } from "../../text/model/divLike";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrPartVisSchema } from "../../visual/attr/part.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrMetadataPointingSchema } from "../attr/metadataPointing";
import { AttrPartLogSchema } from "../attr/part.log";
import { ModelAnnotLikeSchema } from "../model/annotLike";
import { ModelMilestoneLikeMusicSchema } from "../model/milestoneLike.music";
import { ModelScoreDefLikeSchema } from "../model/scoreDefLike";
import { ModelScorePartSchema } from "../model/scorePart";
import { ModelStaffDefLikeSchema } from "../model/staffDefLike";

/**
 * Base schema with attribute, to simplify types for PartSchema
 */
const PartBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrPartAnlSchema.entries,
	...AttrPartGesSchema.entries,
	...AttrPartLogSchema.entries,
	...AttrPartVisSchema.entries,
});

/**
 * An alternative visual rendition of the score from the point of view of a particular performer (or group of performers).
 * @see https://music-encoding.org/guidelines/v5/elements/part.html
 */
export const PartSchema = v.lazy(() =>
	v.intersect([
		PartBaseSchema,
		ModelAnnotLikeSchema,
		ModelAppLikeSchema,
		ModelDivLikeSchema,
		ModelEditLikeSchema,
		ModelGraphicPrimitiveLikeSchema,
		ModelMilestoneLikeMusicSchema,
		ModelScoreDefLikeSchema,
		ModelScorePartSchema,
		ModelStaffDefLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type PartData = v.InferOutput<typeof PartSchema>;
