import * as v from "valibot";

/**
 * Attributes for volta.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.volta.vis.html
 */
export const AttrVoltaVisSchema = v.object({
  // TODO: Add volta.vis attributes
});

export type AttrVoltaVisData = v.InferOutput<typeof AttrVoltaVisSchema>;
