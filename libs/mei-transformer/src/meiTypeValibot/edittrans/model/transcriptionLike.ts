import * as v from "valibot";

/**
 * Groups elements that represent transcription-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.transcriptionLike.html
 */
export const TranscriptionLikeSchema = v.object({
  // TODO: Add transcription-like elements
});

export type TranscriptionLikeData = v.InferOutput<typeof TranscriptionLikeSchema>;
