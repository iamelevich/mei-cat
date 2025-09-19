import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAuthorizedSchema,
	AttrCommonSchema,
	AttrExtentSchema,
	AttrLangSchema,
	ModelKeyAccidLikeSchema,
	ModelLayerPartSchema,
	ModelMilestoneLikeMusicSchema,
	ModelSectionPartSchema,
	ModelStaffGrpLikeSchema,
} from "../../shared";
import {
	AttrEditSchema,
	ModelEditLikeSchema,
	ModelEditTransPartSchema,
	ModelTranscriptionLikeSchema,
} from "..";
import { ModelDivLikeSchema } from "../../text";
import { ModelFLikeSchema } from "../../harmony";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import {
	ModelNeumeComponentModifierLikeSchema,
	ModelNeumeModifierLikeSchema,
	ModelNeumePartSchema,
} from "../../neumes";

/**
 * Base schema with attribute, to simplify types for RegSchema
 */
const RegBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrExtentSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains material which has been regularized or normalized in some sense.
 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
 */
export const RegSchema = v.intersect([
	RegBaseSchema,
	ModelDivLikeSchema,
	ModelEditLikeSchema,
	ModelEditTransPartSchema,
	ModelFLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelKeyAccidLikeSchema,
	ModelLayerPartSchema,
	ModelMilestoneLikeMusicSchema,
	ModelNeumeComponentModifierLikeSchema,
	ModelNeumeModifierLikeSchema,
	ModelNeumePartSchema,
	ModelSectionPartSchema,
	ModelStaffGrpLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type RegData = v.InferOutput<typeof RegSchema>;
