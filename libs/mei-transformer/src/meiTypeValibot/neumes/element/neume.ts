import * as v from "valibot";
import { AttrNeumeAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrNeumeGesSchema } from "../../gestural";
import {
	AttrBasicSchema,
	AttrClassedSchema,
	AttrLabelledSchema,
	AttrLinkingSchema,
	AttrNNumberLikeSchema,
	AttrResponsibilitySchema,
} from "../../shared";
import { AttrNeumeVisSchema } from "../../visual";
import {
	AttrNeumeLogSchema,
	ModelNeumeModifierLikeSchema,
	ModelNeumePartSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for NeumeSchema
 */
const NeumeBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrClassedSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrNNumberLikeSchema.entries,
	...AttrNeumeAnlSchema.entries,
	...AttrNeumeGesSchema.entries,
	...AttrNeumeLogSchema.entries,
	...AttrNeumeVisSchema.entries,
	...AttrResponsibilitySchema.entries,
});

/**
 * Sign representing one or more musical pitches.
 * @see https://music-encoding.org/guidelines/v5/elements/neume.html
 */
export const NeumeSchema = v.intersect([
	NeumeBaseSchema,
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelNeumeModifierLikeSchema,
	ModelNeumePartSchema,
	ModelTranscriptionLikeSchema,
]);

export type NeumeData = v.InferOutput<typeof NeumeSchema>;
