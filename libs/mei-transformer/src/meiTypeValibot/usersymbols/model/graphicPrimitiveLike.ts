import * as v from "valibot";

/**
 * Groups elements that represent graphicprimitivelike parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.graphicPrimitiveLike.html
 */
export const GraphicPrimitiveLikeSchema = v.object({
  // TODO: Add graphicprimitivelike elements
});

export type GraphicPrimitiveLikeData = v.InferOutput<typeof GraphicPrimitiveLikeSchema>;
