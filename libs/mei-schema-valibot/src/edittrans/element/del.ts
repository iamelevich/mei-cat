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
import { AttrTextRenditionSchema } from "../../shared/attr/textRendition";
import { ModelKeyAccidLikeSchema } from "../../shared/model/keyAccidLike";
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
 * Base schema with attribute, to simplify types for DelSchema
 */
const DelBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEditSchema.entries,
	...AttrExtentSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrTextRenditionSchema.entries,
	...AttrTransSchema.entries,
});

/**
 * Contains information deleted, marked as deleted, or otherwise indicated as superfluous or spurious in the copy text by an author, scribe, annotator, or corrector.
 * @see https://music-encoding.org/guidelines/v5/elements/del.html
 */
export const DelSchema = v.lazy(() =>
	v.intersect([
		DelBaseSchema,
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
	]),
);

export type DelData = v.InferOutput<typeof DelSchema>;
