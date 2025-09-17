import * as v from "valibot";

/**
 * Groups elements that represent reading parts in music.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.rdgPart.music.html
 */
export const RdgPartMusicSchema = v.object({
  // TODO: Add music reading part elements
});

export type RdgPartMusicData = v.InferOutput<typeof RdgPartMusicSchema>;
