import * as v from "valibot";
import { AttrLigatureAnlSchema } from "../../analytical/attr/ligature.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrLigatureGesSchema } from "../../gestural/attr/ligature.ges";
import { ModelEventLikeNeumesSchema } from "../../neumes/model/eventLike.neumes";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelEventLikeSchema } from "../../shared/model/eventLike";
import { AttrLigatureVisSchema } from "../../visual/attr/ligature.vis";
import { AttrLigatureLogSchema } from "../attr/ligature.log";
import { ModelEventLikeMensuralSchema } from "../model/eventLike.mensural";

/**
 * Base schema with attribute, to simplify types for LigatureSchema
 */
const LigatureBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLigatureAnlSchema.entries,
	...AttrLigatureGesSchema.entries,
	...AttrLigatureLogSchema.entries,
	...AttrLigatureVisSchema.entries,
});

/**
 * A mensural notation symbol that combines two or more notes into a single sign.
 * @see https://music-encoding.org/guidelines/v5/elements/ligature.html
 */
export const LigatureSchema = v.lazy(() =>
	v.intersect([
		LigatureBaseSchema,
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelEventLikeSchema,
		ModelEventLikeMensuralSchema,
		ModelEventLikeNeumesSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type LigatureData = v.InferOutput<typeof LigatureSchema>;
