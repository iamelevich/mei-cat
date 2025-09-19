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
import { ModelKeyAccidLikeSchema } from "../../shared/model/keyAccidLike";
import { ModelLayerPartSchema } from "../../shared/model/layerPart";
import { ModelMilestoneLikeMusicSchema } from "../../shared/model/milestoneLike.music";
import { ModelSectionPartSchema } from "../../shared/model/sectionPart";
import { ModelStaffGrpLikeSchema } from "../../shared/model/staffGrpLike";
import { ModelDivLikeSchema } from "../../text/model/divLike";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrAgentIdentSchema } from "../attr/agentIdent";
import { AttrEditSchema } from "../attr/edit";
import { AttrReasonIdentSchema } from "../attr/reasonIdent";
import { ModelEditLikeSchema } from "../model/editLike";
import { ModelEditTransPartSchema } from "../model/editTransPart";
import { ModelTranscriptionLikeSchema } from "../model/transcriptionLike";

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
export const SuppliedSchema = v.lazy(() =>
	v.intersect([
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
	]),
);

export type SuppliedData = v.InferOutput<typeof SuppliedSchema>;
