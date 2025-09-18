import * as v from "valibot";

/**
 * Groups elements that represent key signature-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.keySigLike.html
 */
export const KeySigLikeSchema = v.object({
  // TODO: Add key signature-like elements
});

export type KeySigLikeData = v.InferOutput<typeof KeySigLikeSchema>;
