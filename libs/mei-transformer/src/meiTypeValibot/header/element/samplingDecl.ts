import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDataPointingSchema,
	AttrLangSchema,
	ModelHeadLikeSchema,
	ModelPLikeSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for SamplingDeclSchema
 */
const SamplingDeclBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains a prose description of the rationale and methods used in sampling texts in the creation of a corpus or collection.
 * @see https://music-encoding.org/guidelines/v5/elements/samplingDecl.html
 */
export const SamplingDeclSchema = v.intersect([
	SamplingDeclBaseSchema,
	ModelHeadLikeSchema,
	ModelPLikeSchema,
]);

export type SamplingDeclData = v.InferOutput<typeof SamplingDeclSchema>;
