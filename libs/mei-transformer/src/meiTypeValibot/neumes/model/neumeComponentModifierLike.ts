import * as v from "valibot";

/**
 * Groups elements that represent neumecomponentmodifierlike parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.neumeComponentModifierLike.html
 */
export const NeumeComponentModifierLikeSchema = v.object({
  // TODO: Add neumecomponentmodifierlike elements
});

export type NeumeComponentModifierLikeData = v.InferOutput<typeof NeumeComponentModifierLikeSchema>;
