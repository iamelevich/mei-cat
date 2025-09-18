import * as v from "valibot";

/**
 * Groups elements that represent text components.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.textComponentLike.html
 */
export const TextComponentLikeSchema = v.object({
  // TODO: Add text component elements
});

export type TextComponentLikeData = v.InferOutput<typeof TextComponentLikeSchema>;
