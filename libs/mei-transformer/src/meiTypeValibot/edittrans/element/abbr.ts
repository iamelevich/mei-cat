import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	ModelLayerPartSchema,
	ModelMilestoneLikeMusicSchema,
	ModelSectionPartSchema,
	ModelStaffGrpLikeSchema,
} from "../../shared";
import {
	AttrEditSchema,
	AttrTransSchema,
	ModelEditLikeSchema,
	ModelEditTransPartSchema,
	ModelTranscriptionLikeSchema,
} from "..";
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
 * Base schema with attribute, to simplify types for AbbrSchema
 */
const AbbrBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrTransSchema.entries,

	// Direct attributes
	/**
	 * Records the expansion of a text abbreviation.
	 */
	"@expan": v.optional(v.string()),
});

/**
 * A generic element for 1) a shortened form of a word, including an acronym or 2) a shorthand notation.
 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
 */
export const AbbrSchema = v.intersect([
	AbbrBaseSchema,
	ModelDivLikeSchema,
	ModelEditLikeSchema,
	ModelEditTransPartSchema,
	ModelFLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelLayerPartSchema,
	ModelMilestoneLikeMusicSchema,
	ModelNeumeComponentModifierLikeSchema,
	ModelNeumeModifierLikeSchema,
	ModelNeumePartSchema,
	ModelSectionPartSchema,
	ModelStaffGrpLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type AbbrData = v.InferOutput<typeof AbbrSchema>;
