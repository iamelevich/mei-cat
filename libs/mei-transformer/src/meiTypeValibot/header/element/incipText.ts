import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrInternetMediaSchema,
	AttrLangSchema,
	AttrPointingSchema,
	ModelHeadLikeSchema,
	ModelPLikeSchema,
} from "../../shared";
import { ModelLgLikeSchema } from "../../text";

/**
 * Base schema with attribute, to simplify types for IncipTextSchema
 */
const IncipTextBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrInternetMediaSchema.entries,
	...AttrLangSchema.entries,
	...AttrPointingSchema.entries,
});

/**
 * Opening words of a musical composition.
 * @see https://music-encoding.org/guidelines/v5/elements/incipText.html
 */
export const IncipTextSchema = v.intersect([
	IncipTextBaseSchema,
	ModelHeadLikeSchema,
	ModelLgLikeSchema,
	ModelPLikeSchema,
]);

export type IncipTextData = v.InferOutput<typeof IncipTextSchema>;
