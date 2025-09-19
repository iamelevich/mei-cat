import * as v from "valibot";
import { AttrLayerAnlSchema } from "../../analytical/attr/layer.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrLayerGesSchema } from "../../gestural/attr/layer.ges";
import { AttrBasicSchema } from "../../shared/attr/basic";
import { AttrLabelledSchema } from "../../shared/attr/labelled";
import { AttrLayerLogSchema } from "../../shared/attr/layer.log";
import { AttrLinkingSchema } from "../../shared/attr/linking";
import { AttrMetadataPointingSchema } from "../../shared/attr/metadataPointing";
import { AttrNIntegerSchema } from "../../shared/attr/nInteger";
import { AttrResponsibilitySchema } from "../../shared/attr/responsibility";
import { AttrTypedSchema } from "../../shared/attr/typed";
import { ModelAnnotLikeSchema } from "../../shared/model/annotLike";
import { ModelLayerPartSchema } from "../../shared/model/layerPart";
import { ModelMilestoneLikeMusicSchema } from "../../shared/model/milestoneLike.music";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrLayerVisSchema } from "../../visual/attr/layer.vis";

/**
 * Base schema with attribute, to simplify types for OLayerSchema
 */
const OLayerBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLayerAnlSchema.entries,
	...AttrLayerGesSchema.entries,
	...AttrLayerLogSchema.entries,
	...AttrLayerVisSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrNIntegerSchema.entries,
	...AttrResponsibilitySchema.entries,
	...AttrTypedSchema.entries,
});

/**
 * A layer that contains an alternative to material in another layer.
 * @see https://music-encoding.org/guidelines/v5/elements/oLayer.html
 */
export const OLayerSchema = v.lazy(() =>
	v.intersect([
		OLayerBaseSchema,
		ModelAnnotLikeSchema,
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelGraphicPrimitiveLikeSchema,
		ModelLayerPartSchema,
		ModelMilestoneLikeMusicSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type OLayerData = v.InferOutput<typeof OLayerSchema>;
