import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrInternetMediaSchema,
	AttrLangSchema,
	AttrMetadataPointingSchema,
	AttrPointingSchema,
	AttrTargetEvalSchema,
	ModelTextPhraseLikeSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for RefSchema
 */
const RefBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrInternetMediaSchema.entries,
	...AttrLangSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrPointingSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * Defines a traversible reference to another location. May contain text and sub-elements that describe the destination.
 * @see https://music-encoding.org/guidelines/v5/elements/ref.html
 */
export const RefSchema = v.intersect([
	RefBaseSchema,
	ModelTextPhraseLikeSchema,
]);

export type RefData = v.InferOutput<typeof RefSchema>;
