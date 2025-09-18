import * as v from "valibot";

/**
 * Groups elements that represent chord table-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.chordTableLike.html
 */
export const ChordTableLikeSchema = v.object({
  // TODO: Add chord table-like elements
});

export type ChordTableLikeData = v.InferOutput<typeof ChordTableLikeSchema>;
