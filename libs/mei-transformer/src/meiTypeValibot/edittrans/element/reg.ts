import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelFLikeSchema } from "../../harmony";
import {
	ModelNeumeComponentModifierLikeSchema,
	ModelNeumeModifierLikeSchema,
	ModelNeumePartSchema,
} from "../../neumes";
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
import { ModelDivLikeSchema } from "../../text";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import {
	AttrEditSchema,
	ModelEditLikeSchema,
	ModelEditTransPartSchema,
	ModelTranscriptionLikeSchema,
} from "..";

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
