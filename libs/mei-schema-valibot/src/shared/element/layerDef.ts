import * as v from "valibot";
import { AttrLayerDefAnlSchema } from "../../analytical/attr/layerDef.anl";
import { StandardTagSchema } from "../../common";
import { AttrLayerDefGesSchema } from "../../gestural/attr/layerDef.ges";
import { AttrLayerDefVisSchema } from "../../visual/attr/layerDef.vis";
import { AttrBasicSchema } from "../attr/basic";
import { AttrLabelledSchema } from "../attr/labelled";
import { AttrLayerDefLogSchema } from "../attr/layerDef.log";
import { AttrLinkingSchema } from "../attr/linking";
import { AttrMetadataPointingSchema } from "../attr/metadataPointing";
import { AttrNIntegerSchema } from "../attr/nInteger";
import { AttrResponsibilitySchema } from "../attr/responsibility";
import { AttrTypedSchema } from "../attr/typed";
import { ModelInstrDefLikeSchema } from "../model/instrDefLike";
import { ModelLabelLikeSchema } from "../model/labelLike";
import { ModelMeterSigLikeSchema } from "../model/meterSigLike";
import { AmbitusSchema } from "./ambitus";

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
export const LayerDefSchema = v.lazy(() =>
	v.intersect([
		LayerDefBaseSchema,
		v.object({
			/**
			 * Reference to element ambitus
			 * @see https://music-encoding.org/guidelines/v5/elements/ambitus.html
			 */
			ambitus: v.optional(AmbitusSchema),
		}),
		ModelInstrDefLikeSchema,
		ModelLabelLikeSchema,
		ModelMeterSigLikeSchema,
	]),
);

export type LayerDefData = v.InferOutput<typeof LayerDefSchema>;
