import * as v from "valibot";

/**
 * Groups elements that represent start-like elements in header.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.startLike.header.html
 */
export const StartLikeHeaderSchema = v.object({
  // TODO: Add start-like header elements
});

export type StartLikeHeaderData = v.InferOutput<typeof StartLikeHeaderSchema>;
