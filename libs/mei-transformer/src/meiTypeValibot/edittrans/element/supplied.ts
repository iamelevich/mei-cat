import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAgentIdentSchema,
	AttrEditSchema,
	AttrReasonIdentSchema,
	ModelEditLikeSchema,
	ModelEditTransPartSchema,
	ModelTranscriptionLikeSchema,
} from "..";
import {
	AttrCommonSchema,
	AttrExtentSchema,
	AttrLangSchema,
	ModelKeyAccidLikeSchema,
	ModelLayerPartSchema,
	ModelMilestoneLikeMusicSchema,
	ModelSectionPartSchema,
	ModelStaffGrpLikeSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { ModelDivLikeSchema } from "../../text";
import { ModelFLikeSchema } from "../../harmony";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import {
	ModelNeumeComponentModifierLikeSchema,
	ModelNeumeModifierLikeSchema,
	ModelNeumePartSchema,
} from "../../neumes";

/**
 * Base schema with attribute, to simplify types for SuppliedSchema
 */
const SuppliedBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAgentIdentSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrExtentSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrReasonIdentSchema.entries,
});

/**
 * Contains material supplied by the transcriber or editor for any reason.
 * @see https://music-encoding.org/guidelines/v5/elements/supplied.html
 */
export const SuppliedSchema = v.intersect([
	SuppliedBaseSchema,
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

export type SuppliedData = v.InferOutput<typeof SuppliedSchema>;
