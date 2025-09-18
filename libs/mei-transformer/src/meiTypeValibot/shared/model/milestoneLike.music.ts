import * as v from "valibot";

/**
 * Groups elements that represent milestone-like elements in music.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.milestoneLike.music.html
 */
export const MilestoneLikeMusicSchema = v.object({
  // TODO: Add milestone-like music elements
});

export type MilestoneLikeMusicData = v.InferOutput<typeof MilestoneLikeMusicSchema>;
