import * as v from "valibot";
import {
	TextComponentLikeSchema,
	TextPhraseLikeLimitedSchema,
} from "../../shared";

/**
 * Groups elements that represent reading parts in text.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.rdgPart.text.html
 */
export const RdgPartTextSchema = v.intersect([
	TextComponentLikeSchema,
	TextPhraseLikeLimitedSchema,
]);

export type RdgPartTextData = v.InferOutput<typeof RdgPartTextSchema>;
