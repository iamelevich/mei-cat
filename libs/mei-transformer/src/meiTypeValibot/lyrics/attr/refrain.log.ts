import * as v from "valibot";

/**
 * Attributes for refrain.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.refrain.log.html
 */
export const AttrRefrainLogSchema = v.object({
  // TODO: Add refrain.log attributes
});

export type AttrRefrainLogData = v.InferOutput<typeof AttrRefrainLogSchema>;
