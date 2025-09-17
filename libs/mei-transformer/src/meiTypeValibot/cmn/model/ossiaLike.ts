import * as v from "valibot";

/**
 * Groups elements that represent ossia-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.ossiaLike.html
 */
export const OssiaLikeSchema = v.object({
  // TODO: Add ossia-like elements
});

export type OssiaLikeData = v.InferOutput<typeof OssiaLikeSchema>;
