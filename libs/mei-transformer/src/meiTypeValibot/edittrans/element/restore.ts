import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { ModelFLikeSchema } from "../../harmony";
import {
	ModelNeumeComponentModifierLikeSchema,
	ModelNeumeModifierLikeSchema,
	ModelNeumePartSchema,
} from "../../neumes";
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
import { ModelDivLikeSchema } from "../../text";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import {
	AttrEditSchema,
	AttrTransSchema,
	ModelEditLikeSchema,
	ModelEditTransPartSchema,
	ModelTranscriptionLikeSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for RestoreSchema
 */
const RestoreBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrExtentSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrTransSchema.entries,

	// Direct attributes
	/**
	 * Provides a description of the means of restoration, <val>stet</val> or <val>strike-down</val>, for example.
	 */
	"@desc": v.optional(v.string()),
});

/**
 * Indicates restoration of material to an earlier state by cancellation of an editorial or authorial marking or instruction.
 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
 */
export const RestoreSchema = v.intersect([
	RestoreBaseSchema,
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

export type RestoreData = v.InferOutput<typeof RestoreSchema>;
