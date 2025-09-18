import * as v from "valibot";

/**
 * Groups elements that represent ornamentlike.cmn parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.ornamentLike.cmn.html
 */
export const OrnamentLikeCmnSchema = v.object({
	// TODO: Add ornamentlike.cmn elements
});

export type OrnamentLikeCmnData = v.InferOutput<typeof OrnamentLikeCmnSchema>;
