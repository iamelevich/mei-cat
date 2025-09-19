import * as v from "valibot";
import { AttrRdgAnlSchema } from "../../analytical/attr/rdg.anl";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrRdgGesSchema } from "../../gestural/attr/rdg.ges";
import { ModelFLikeSchema } from "../../harmony/model/fLike";
import { ModelNeumeComponentModifierLikeSchema } from "../../neumes/model/neumeComponentModifierLike";
import { ModelNeumeModifierLikeSchema } from "../../neumes/model/neumeModifierLike";
import { ModelNeumePartSchema } from "../../neumes/model/neumePart";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrPointingSchema } from "../../shared/attr/pointing";
import { AttrTargetEvalSchema } from "../../shared/attr/targetEval";
import { ExpansionSchema } from "../../shared/element/expansion";
import { ModelLayerPartSchema } from "../../shared/model/layerPart";
import { ModelMilestoneLikeMusicSchema } from "../../shared/model/milestoneLike.music";
import { ModelSectionPartSchema } from "../../shared/model/sectionPart";
import { ModelStaffGrpLikeSchema } from "../../shared/model/staffGrpLike";
import { ModelDivLikeSchema } from "../../text/model/divLike";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrRdgVisSchema } from "../../visual/attr/rdg.vis";
import { AttrCritSchema } from "../attr/crit";
import { AttrRdgLogSchema } from "../attr/rdg.log";
import { ModelAppLikeSchema } from "../model/appLike";
import { ModelRdgPartSchema } from "../model/rdgPart";

/**
 * Base schema with attribute, to simplify types for LemSchema
 */
const LemBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrCritSchema.entries,
	...AttrPointingSchema.entries,
	...AttrRdgAnlSchema.entries,
	...AttrRdgGesSchema.entries,
	...AttrRdgLogSchema.entries,
	...AttrRdgVisSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * Contains the lemma, or base text, of a textual variation.
 * @see https://music-encoding.org/guidelines/v5/elements/lem.html
 */
export const LemSchema = v.lazy(() =>
	v.intersect([
		LemBaseSchema,
		v.object({
			/**
			 * Reference to element expansion
			 * @see https://music-encoding.org/guidelines/v5/elements/expansion.html
			 */
			expansion: v.optional(
				v.union([v.array(ExpansionSchema), ExpansionSchema]),
			),
		}),
		ModelAppLikeSchema,
		ModelDivLikeSchema,
		ModelEditLikeSchema,
		ModelFLikeSchema,
		ModelGraphicPrimitiveLikeSchema,
		ModelLayerPartSchema,
		ModelMilestoneLikeMusicSchema,
		ModelNeumeComponentModifierLikeSchema,
		ModelNeumeModifierLikeSchema,
		ModelNeumePartSchema,
		ModelRdgPartSchema,
		ModelSectionPartSchema,
		ModelStaffGrpLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type LemData = v.InferOutput<typeof LemSchema>;
