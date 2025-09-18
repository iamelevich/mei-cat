import * as v from "valibot";

/**
 * Attributes for quantity.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.quantity.html
 */
export const AttrQuantitySchema = v.object({
  // TODO: Add quantity attributes
});

export type AttrQuantityData = v.InferOutput<typeof AttrQuantitySchema>;
