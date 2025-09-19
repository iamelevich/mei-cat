import * as v from "valibot";
import { AttrLayerAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrLayerGesSchema } from "../../gestural";
import { DivLineSchema } from "../../neumes";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import { AttrLayerVisSchema } from "../../visual";
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
} from "..";

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
export const LayerSchema = v.intersect([
	LayerBaseSchema,
	v.object({
		/**
		 * Reference to element divLine
		 * @see https://music-encoding.org/guidelines/v5/elements/divLine.html
		 */
		divLine: v.optional(
			v.union([
				v.lazy(() => DivLineSchema),
				v.array(v.lazy(() => DivLineSchema)),
			]),
		),
	}),
	ModelAnnotLikeSchema,
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelLayerPartSchema,
	ModelMilestoneLikeMusicSchema,
	ModelTranscriptionLikeSchema,
]);

export type LayerData = v.InferOutput<typeof LayerSchema>;
