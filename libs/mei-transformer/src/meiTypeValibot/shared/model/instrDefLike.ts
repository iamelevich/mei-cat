import * as v from "valibot";

/**
 * Groups elements that represent instrument definition-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.instrDefLike.html
 */
export const InstrDefLikeSchema = v.object({
  // TODO: Add instrument definition-like elements
});

export type InstrDefLikeData = v.InferOutput<typeof InstrDefLikeSchema>;
