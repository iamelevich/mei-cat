import * as v from "valibot";

/**
 * Groups elements that represent address parts.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.addressPart.html
 */
export const AddressPartSchema = v.object({
  // TODO: Add address part elements
});

export type AddressPartData = v.InferOutput<typeof AddressPartSchema>;
