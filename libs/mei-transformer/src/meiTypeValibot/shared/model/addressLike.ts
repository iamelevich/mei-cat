import * as v from "valibot";

/**
 * Groups elements that represent address-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.addressLike.html
 */
export const AddressLikeSchema = v.object({
  // TODO: Add address-like elements
});

export type AddressLikeData = v.InferOutput<typeof AddressLikeSchema>;
