import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { ModelFLikeSchema } from "../../harmony/model/fLike";
import { ModelNeumeComponentModifierLikeSchema } from "../../neumes/model/neumeComponentModifierLike";
import { ModelNeumeModifierLikeSchema } from "../../neumes/model/neumeModifierLike";
import { ModelNeumePartSchema } from "../../neumes/model/neumePart";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrExtentSchema } from "../../shared/attr/extent";
import { AttrLangSchema } from "../../shared/attr/lang";
import { ModelLayerPartSchema } from "../../shared/model/layerPart";
import { ModelMilestoneLikeMusicSchema } from "../../shared/model/milestoneLike.music";
import { ModelSectionPartSchema } from "../../shared/model/sectionPart";
import { ModelStaffGrpLikeSchema } from "../../shared/model/staffGrpLike";
import { ModelDivLikeSchema } from "../../text/model/divLike";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrEditSchema } from "../attr/edit";
import { AttrTransSchema } from "../attr/trans";
import { ModelEditLikeSchema } from "../model/editLike";
import { ModelEditTransPartSchema } from "../model/editTransPart";
import { ModelTranscriptionLikeSchema } from "../model/transcriptionLike";

/**
 * Base schema with attribute, to simplify types for ExpanSchema
 */
const ExpanBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrExtentSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrTransSchema.entries,

	// Direct attributes
	/**
	 * Captures the abbreviated form of the text.
	 */
	"@abbr": v.optional(v.string()),
});

/**
 * Contains the expansion of an abbreviation.
 * @see https://music-encoding.org/guidelines/v5/elements/expan.html
 */
export const ExpanSchema = v.lazy(() =>
	v.intersect([
		ExpanBaseSchema,
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
	]),
);

export type ExpanData = v.InferOutput<typeof ExpanSchema>;
