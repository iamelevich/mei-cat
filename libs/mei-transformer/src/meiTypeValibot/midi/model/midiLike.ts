import * as v from "valibot";

/**
 * Groups elements that represent midilike parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.midiLike.html
 */
export const MidiLikeSchema = v.object({
  // TODO: Add midilike elements
});

export type MidiLikeData = v.InferOutput<typeof MidiLikeSchema>;
