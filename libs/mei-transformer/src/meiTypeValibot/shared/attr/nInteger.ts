import * as v from "valibot";

/**
 * Attributes for nInteger.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.nInteger.html
 */
export const AttrNIntegerSchema = v.object({
  // TODO: Add nInteger attributes
});

export type AttrNIntegerData = v.InferOutput<typeof AttrNIntegerSchema>;
