import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBasicSchema,
	AttrLabelledSchema,
	AttrLayerLogSchema,
	AttrLinkingSchema,
	AttrMetadataPointingSchema,
	AttrNIntegerSchema,
	AttrResponsibilitySchema,
	AttrTypedSchema,
	ModelAnnotLikeSchema,
	ModelLayerPartSchema,
	ModelMilestoneLikeMusicSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrLayerAnlSchema } from "../../analytical";
import { AttrLayerGesSchema } from "../../gestural";
import { AttrLayerVisSchema } from "../../visual";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";

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
export const OLayerSchema = v.intersect([
	OLayerBaseSchema,
	ModelAnnotLikeSchema,
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelLayerPartSchema,
	ModelMilestoneLikeMusicSchema,
	ModelTranscriptionLikeSchema,
]);

export type OLayerData = v.InferOutput<typeof OLayerSchema>;
