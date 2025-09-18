import * as v from "valibot";

/**
 * Attributes for caesura.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.caesura.ges.html
 */
export const AttrCaesuraGesSchema = v.object({
  // TODO: Add caesura.ges attributes
});

export type AttrCaesuraGesData = v.InferOutput<typeof AttrCaesuraGesSchema>;
