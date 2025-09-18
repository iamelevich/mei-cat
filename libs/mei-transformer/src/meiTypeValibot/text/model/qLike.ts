import * as v from "valibot";
import { QSchema } from "../q";
import { QuoteSchema } from "../quote";

/**
 * Groups elements used to represent quotations.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.qLike.html
 */
export const QLikeSchema = v.object({
  /**
   * Contains material which is distinguished from the surrounding phrase-level text using quotation marks or a similar method. Use quote for block-level quotations.
   * @see https://music-encoding.org/guidelines/v5/elements/q.html
   */
  q: v.optional(
    v.union([v.lazy(() => QSchema), v.array(v.lazy(() => QSchema))]),
  ),

  /**
   * Contains a passage which is distinguished from the surrounding text using quotation marks or a similar method. Use q for inline quotations.
   * @see https://music-encoding.org/guidelines/v5/elements/quote.html
   */
  quote: v.optional(
    v.union([v.lazy(() => QuoteSchema), v.array(v.lazy(() => QuoteSchema))]),
  ),
});

export type QLikeData = v.InferOutput<typeof QLikeSchema>;
