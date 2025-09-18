import * as v from "valibot";

/**
 * Groups elements that represent meter signature-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.meterSigLike.html
 */
export const MeterSigLikeSchema = v.object({
  // TODO: Add meter signature-like elements
});

export type MeterSigLikeData = v.InferOutput<typeof MeterSigLikeSchema>;
