import * as v from "valibot";

/**
 * Groups elements that represent musical division-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.mdivLike.html
 */
export const MdivLikeSchema = v.object({
  // TODO: Add musical division-like elements
});

export type MdivLikeData = v.InferOutput<typeof MdivLikeSchema>;
