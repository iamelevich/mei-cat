import * as v from "valibot";

/**
 * Attributes for plica.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.plica.vis.html
 */
export const AttrPlicaVisSchema = v.object({
  // TODO: Add plica.vis attributes
});

export type AttrPlicaVisData = v.InferOutput<typeof AttrPlicaVisSchema>;
