import * as v from "valibot";

/**
 * Groups elements for common music notation ornaments.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.ornamentLike.cmn.html
 */
export const OrnamentLikeCmnSchema = v.object({
  // TODO: Add ornament elements
});

export type OrnamentLikeCmnData = v.InferOutput<typeof OrnamentLikeCmnSchema>;
