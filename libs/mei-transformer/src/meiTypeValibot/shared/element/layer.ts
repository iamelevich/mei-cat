import * as v from "valibot";
import { AttrLayerAnlSchema } from "../../analytical/attr/layer.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrLayerGesSchema } from "../../gestural/attr/layer.ges";
import { DivLineSchema } from "../../neumes/element/divLine";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrLayerVisSchema } from "../../visual/attr/layer.vis";
import { AttrBasicSchema } from "../attr/basic";
import { AttrLabelledSchema } from "../attr/labelled";
import { AttrLayerLogSchema } from "../attr/layer.log";
import { AttrLinkingSchema } from "../attr/linking";
import { AttrMetadataPointingSchema } from "../attr/metadataPointing";
import { AttrNIntegerSchema } from "../attr/nInteger";
import { AttrResponsibilitySchema } from "../attr/responsibility";
import { AttrTypedSchema } from "../attr/typed";
import { ModelAnnotLikeSchema } from "../model/annotLike";
import { ModelLayerPartSchema } from "../model/layerPart";
import { ModelMilestoneLikeMusicSchema } from "../model/milestoneLike.music";

/**
 * Base schema with attribute, to simplify types for LayerSchema
 */
const LayerBaseSchema = v.object({
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
 * An independent stream of events on a staff.
 * @see https://music-encoding.org/guidelines/v5/elements/layer.html
 */
export const LayerSchema = v.lazy(() =>
	v.intersect([
		LayerBaseSchema,
		v.object({
			/**
			 * Reference to element divLine
			 * @see https://music-encoding.org/guidelines/v5/elements/divLine.html
			 */
			divLine: v.optional(v.union([v.array(DivLineSchema), DivLineSchema])),
		}),
		ModelAnnotLikeSchema,
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelGraphicPrimitiveLikeSchema,
		ModelLayerPartSchema,
		ModelMilestoneLikeMusicSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type LayerData = v.InferOutput<typeof LayerSchema>;
