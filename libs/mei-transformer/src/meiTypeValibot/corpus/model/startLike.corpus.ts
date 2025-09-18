import * as v from "valibot";

/**
 * Groups elements that represent startlike.corpus parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.startLike.corpus.html
 */
export const StartLikeCorpusSchema = v.object({
  // TODO: Add startlike.corpus elements
});

export type StartLikeCorpusData = v.InferOutput<typeof StartLikeCorpusSchema>;
