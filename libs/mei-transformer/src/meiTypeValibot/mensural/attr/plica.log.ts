import * as v from "valibot";

/**
 * Attributes for plica.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.plica.log.html
 */
export const AttrPlicaLogSchema = v.object({
  // TODO: Add plica.log attributes
});

export type AttrPlicaLogData = v.InferOutput<typeof AttrPlicaLogSchema>;
