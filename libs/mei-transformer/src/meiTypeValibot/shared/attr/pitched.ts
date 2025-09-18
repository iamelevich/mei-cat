import * as v from "valibot";

/**
 * Attributes for pitched elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pitched.html
 */
export const AttrPitchedSchema = v.object({
  // TODO: Add pitched attributes
});

export type AttrPitchedData = v.InferOutput<typeof AttrPitchedSchema>;
