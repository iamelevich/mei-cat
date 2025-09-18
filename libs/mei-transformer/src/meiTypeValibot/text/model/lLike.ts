import * as v from "valibot";
import { LSchema } from "../l";

/**
 * Groups elements used to represent a line.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.lLike.html
 */
export const LLikeSchema = v.object({
  /**
   * A visual line consisting of text. May include text and other inline elements.
   * @see https://music-encoding.org/guidelines/v5/elements/l.html
   */
  l: v.optional(
    v.union([v.lazy(() => LSchema), v.array(v.lazy(() => LSchema))]),
  ),
});

export type LLikeData = v.InferOutput<typeof LLikeSchema>;
