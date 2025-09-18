import * as v from "valibot";

/**
 * Groups elements that represent identifier-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.identifierLike.html
 */
export const IdentifierLikeSchema = v.object({
  // TODO: Add identifier-like elements
});

export type IdentifierLikeData = v.InferOutput<typeof IdentifierLikeSchema>;
