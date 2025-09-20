import * as v from "valibot";
import { AttrGraceGrpAnlSchema } from "../../analytical/attr/graceGrp.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrGraceGrpGesSchema } from "../../gestural/attr/graceGrp.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelEventLikeSchema } from "../../shared/model/eventLike";
import { AttrGraceGrpVisSchema } from "../../visual/attr/graceGrp.vis";
import { AttrGraceGrpLogSchema } from "../attr/graceGrp.log";
import { ModelEventLikeCmnSchema } from "../model/eventLike.cmn";

/**
 * Base schema with attribute, to simplify types for GraceGrpSchema
 */
const GraceGrpBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrGraceGrpAnlSchema.entries,
	...AttrGraceGrpGesSchema.entries,
	...AttrGraceGrpLogSchema.entries,
	...AttrGraceGrpVisSchema.entries,
});

/**
 * A container for a sequence of grace notes.
 * @see https://music-encoding.org/guidelines/v5/elements/graceGrp.html
 */
export const GraceGrpSchema = v.lazy(() =>
	v.intersect([
		GraceGrpBaseSchema,
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelEventLikeSchema,
		ModelEventLikeCmnSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type GraceGrpData = v.InferOutput<typeof GraceGrpSchema>;
