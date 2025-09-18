import * as v from "valibot";

/**
 * Attributes for numbered.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.numbered.html
 */
export const AttrNumberedSchema = v.object({
  // TODO: Add numbered attributes
});

export type AttrNumberedData = v.InferOutput<typeof AttrNumberedSchema>;
