import * as v from "valibot";

/**
 * Attributes for barring.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.barring.html
 */
export const AttrBarringSchema = v.object({
  // TODO: Add barring attributes
});

export type AttrBarringData = v.InferOutput<typeof AttrBarringSchema>;
