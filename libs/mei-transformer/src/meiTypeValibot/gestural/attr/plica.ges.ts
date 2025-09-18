import * as v from "valibot";

/**
 * Attributes for plica.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.plica.ges.html
 */
export const AttrPlicaGesSchema = v.object({
  // TODO: Add plica.ges attributes
});

export type AttrPlicaGesData = v.InferOutput<typeof AttrPlicaGesSchema>;
