import * as v from "valibot";
import { AttrLayerDefAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrLayerDefGesSchema } from "../../gestural";
import { AttrLayerDefVisSchema } from "../../visual";
import {
	AttrBasicSchema,
	AttrLabelledSchema,
	AttrLayerDefLogSchema,
	AttrLinkingSchema,
	AttrMetadataPointingSchema,
	AttrNIntegerSchema,
	AttrResponsibilitySchema,
	AttrTypedSchema,
	ModelInstrDefLikeSchema,
	ModelLabelLikeSchema,
	ModelMeterSigLikeSchema,
} from "..";
import { AmbitusSchema } from ".";

/**
 * Base schema with attribute, to simplify types for LayerDefSchema
 */
const LayerDefBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLayerDefAnlSchema.entries,
	...AttrLayerDefGesSchema.entries,
	...AttrLayerDefLogSchema.entries,
	...AttrLayerDefVisSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrNIntegerSchema.entries,
	...AttrResponsibilitySchema.entries,
	...AttrTypedSchema.entries,
});

/**
 * Container for layer meta-information.
 * @see https://music-encoding.org/guidelines/v5/elements/layerDef.html
 */
export const LayerDefSchema = v.intersect([
	LayerDefBaseSchema,
	v.object({
		/**
		 * Reference to element ambitus
		 * @see https://music-encoding.org/guidelines/v5/elements/ambitus.html
		 */
		ambitus: v.optional(v.lazy(() => AmbitusSchema)),
	}),
	ModelInstrDefLikeSchema,
	ModelLabelLikeSchema,
	ModelMeterSigLikeSchema,
]);

export type LayerDefData = v.InferOutput<typeof LayerDefSchema>;
