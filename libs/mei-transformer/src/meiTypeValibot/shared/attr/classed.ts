import * as v from "valibot";

/**
 * Attributes for classed elements.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.classed.html
 */
export const AttrClassedSchema = v.object({
  // TODO: Add classed attributes
});

export type AttrClassedData = v.InferOutput<typeof AttrClassedSchema>;
