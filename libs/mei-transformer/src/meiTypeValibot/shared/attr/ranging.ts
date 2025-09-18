import * as v from "valibot";

/**
 * Attributes for ranging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ranging.html
 */
export const AttrRangingSchema = v.object({
  // TODO: Add ranging attributes
});

export type AttrRangingData = v.InferOutput<typeof AttrRangingSchema>;
