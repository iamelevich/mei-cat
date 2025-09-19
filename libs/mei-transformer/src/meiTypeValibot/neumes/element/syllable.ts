import * as v from "valibot";
import { AttrSyllableAnlSchema } from "../../analytical/attr/syllable.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrSyllableGesSchema } from "../../gestural/attr/syllable.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelAnnotLikeSchema } from "../../shared/model/annotLike";
import { ModelMilestoneLikeMusicSchema } from "../../shared/model/milestoneLike.music";
import { ModelScoreDefLikeSchema } from "../../shared/model/scoreDefLike";
import { ModelStaffDefLikeSchema } from "../../shared/model/staffDefLike";
import { ModelStaffGrpLikeSchema } from "../../shared/model/staffGrpLike";
import { ModelDivLikeSchema } from "../../text/model/divLike";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrSyllableVisSchema } from "../../visual/attr/syllable.vis";
import { AttrSyllableLogSchema } from "../attr/syllable.log";
import { ModelNeumeModifierLikeSchema } from "../model/neumeModifierLike";
import { ModelSyllablePartSchema } from "../model/syllablePart";

/**
 * Base schema with attribute, to simplify types for SyllableSchema
 */
const SyllableBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrSyllableAnlSchema.entries,
	...AttrSyllableGesSchema.entries,
	...AttrSyllableLogSchema.entries,
	...AttrSyllableVisSchema.entries,
});

/**
 * Neume notation can be thought of as "neumed text". Therefore, the syllable element provides high-level organization in this repertoire.
 * @see https://music-encoding.org/guidelines/v5/elements/syllable.html
 */
export const SyllableSchema = v.lazy(() =>
	v.intersect([
		SyllableBaseSchema,
		ModelAnnotLikeSchema,
		ModelAppLikeSchema,
		ModelDivLikeSchema,
		ModelEditLikeSchema,
		ModelGraphicPrimitiveLikeSchema,
		ModelMilestoneLikeMusicSchema,
		ModelNeumeModifierLikeSchema,
		ModelScoreDefLikeSchema,
		ModelStaffDefLikeSchema,
		ModelStaffGrpLikeSchema,
		ModelSyllablePartSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type SyllableData = v.InferOutput<typeof SyllableSchema>;
