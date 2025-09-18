import * as v from "valibot";

/**
 * Attributes for volta.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.volta.log.html
 */
export const AttrVoltaLogSchema = v.object({
  // TODO: Add volta.log attributes
});

export type AttrVoltaLogData = v.InferOutput<typeof AttrVoltaLogSchema>;
