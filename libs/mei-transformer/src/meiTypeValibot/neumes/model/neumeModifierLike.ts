import * as v from "valibot";

/**
 * Groups elements that represent neumemodifierlike parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.neumeModifierLike.html
 */
export const NeumeModifierLikeSchema = v.object({
  // TODO: Add neumemodifierlike elements
});

export type NeumeModifierLikeData = v.InferOutput<typeof NeumeModifierLikeSchema>;
