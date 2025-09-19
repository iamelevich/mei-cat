import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
	ExpansionSchema,
	ModelLayerPartSchema,
	ModelMilestoneLikeMusicSchema,
	ModelSectionPartSchema,
	ModelStaffGrpLikeSchema,
} from "../../shared";
import {
	AttrCritSchema,
	AttrRdgLogSchema,
	ModelAppLikeSchema,
	ModelRdgPartSchema,
} from "..";
import { AttrRdgAnlSchema } from "../../analytical";
import { AttrRdgGesSchema } from "../../gestural";
import { AttrRdgVisSchema } from "../../visual";
import { ModelDivLikeSchema } from "../../text";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { ModelFLikeSchema } from "../../harmony";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import {
	ModelNeumeComponentModifierLikeSchema,
	ModelNeumeModifierLikeSchema,
	ModelNeumePartSchema,
} from "../../neumes";

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
export const LemSchema = v.intersect([
	LemBaseSchema,
	v.object({
		/**
		 * Reference to element expansion
		 * @see https://music-encoding.org/guidelines/v5/elements/expansion.html
		 */
		expansion: v.optional(
			v.union([
				v.lazy(() => ExpansionSchema),
				v.array(v.lazy(() => ExpansionSchema)),
			]),
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
]);

export type LemData = v.InferOutput<typeof LemSchema>;
