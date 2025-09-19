import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAgentIdentSchema,
	ModelEditLikeSchema,
	ModelEditTransPartSchema,
	ModelTranscriptionLikeSchema,
} from "..";
import {
	AttrCommonSchema,
	AttrExtentSchema,
	AttrHandIdentSchema,
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
 * Base schema with attribute, to simplify types for DamageSchema
 */
const DamageBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAgentIdentSchema.entries,
	...AttrCommonSchema.entries,
	...AttrExtentSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrHandIdentSchema.entries,
	...AttrLangSchema.entries,

	// Direct attributes
	/**
	 * Records the degree of damage.
	 */
	"@degree": v.optional(v.string()),
});

/**
 * Contains an area of damage to the physical medium.
 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
 */
export const DamageSchema = v.intersect([
	DamageBaseSchema,
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

export type DamageData = v.InferOutput<typeof DamageSchema>;
