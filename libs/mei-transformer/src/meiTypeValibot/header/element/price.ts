import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	ModelHeadLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for PriceSchema
 */
const PriceBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,

	// Direct attributes
	/**
	 * Numeric value capturing a cost. Can only be interpreted in combination with the currency attribute.
	 */
	"@amount": v.optional(v.string()),
	/**
	 * Monetary unit.
	 */
	"@currency": v.optional(v.string()),
});

/**
 * The cost of access to a bibliographic item.
 * @see https://music-encoding.org/guidelines/v5/elements/price.html
 */
export const PriceSchema = v.intersect([
	PriceBaseSchema,
	ModelHeadLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type PriceData = v.InferOutput<typeof PriceSchema>;
