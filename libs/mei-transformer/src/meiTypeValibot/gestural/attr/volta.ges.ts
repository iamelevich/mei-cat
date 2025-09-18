import * as v from "valibot";

/**
 * Attributes for volta.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.volta.ges.html
 */
export const AttrVoltaGesSchema = v.object({
  // TODO: Add volta.ges attributes
});

export type AttrVoltaGesData = v.InferOutput<typeof AttrVoltaGesSchema>;
