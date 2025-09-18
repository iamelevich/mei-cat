import * as v from "valibot";

/**
 * Groups elements that represent chord parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.chordPart.html
 */
export const ChordPartSchema = v.object({
  // TODO: Add chord part elements
});

export type ChordPartData = v.InferOutput<typeof ChordPartSchema>;
