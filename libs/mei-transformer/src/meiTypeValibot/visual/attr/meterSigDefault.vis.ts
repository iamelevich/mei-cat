import * as v from "valibot";

/**
 * Attributes for meterSigDefault.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSigDefault.vis.html
 */
export const AttrMeterSigDefaultVisSchema = v.object({
  // TODO: Add meterSigDefault.vis attributes
});

export type AttrMeterSigDefaultVisData = v.InferOutput<typeof AttrMeterSigDefaultVisSchema>;
