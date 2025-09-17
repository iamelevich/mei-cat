import * as v from "valibot";
import { FSchema, type FData } from "../f";

/**
 * Groups elements that represent single figured bass elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.fLike.html
 */
export const FLikeSchema = v.object({
  /**
   * Single element of a figured bass indication.
   * @see https://music-encoding.org/guidelines/v5/elements/f.html
   */
  f: v.optional(
    v.union([v.lazy(() => FSchema), v.array(v.lazy(() => FSchema))]),
  ),
});

export type FLikeData = v.InferOutput<typeof FLikeSchema>;
