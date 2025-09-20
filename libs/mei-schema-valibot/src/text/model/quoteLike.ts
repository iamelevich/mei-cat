import * as v from "valibot";
import { type QuoteData, QuoteSchema } from "../element/quote";

/**
 * Groups elements used to directly contain quotations.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.quoteLike.html
 */
export const ModelQuoteLikeSchema: v.GenericSchema<ModelQuoteLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * Contains a paragraph-like block of text attributed to an external source, normally set off from the surrounding text by spacing or other typographic distinction.
			 * @see https://music-encoding.org/guidelines/v5/elements/quote.html
			 */
			quote: v.optional(v.union([v.array(QuoteSchema), QuoteSchema])),
		}),
);

export type ModelQuoteLikeData = {
	quote?: QuoteData | QuoteData[];
};
