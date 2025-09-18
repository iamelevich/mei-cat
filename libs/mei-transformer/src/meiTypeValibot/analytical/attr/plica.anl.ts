import * as v from "valibot";

/**
 * Attributes for plica.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.plica.anl.html
 */
export const AttrPlicaAnlSchema = v.object({
  // TODO: Add plica.anl attributes
});

export type AttrPlicaAnlData = v.InferOutput<typeof AttrPlicaAnlSchema>;
