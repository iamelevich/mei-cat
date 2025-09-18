import * as v from "valibot";

/**
 * Groups elements that represent responsibility-like parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.respLikePart.html
 */
export const RespLikePartSchema = v.object({
  // TODO: Add responsibility-like part elements
});

export type RespLikePartData = v.InferOutput<typeof RespLikePartSchema>;
