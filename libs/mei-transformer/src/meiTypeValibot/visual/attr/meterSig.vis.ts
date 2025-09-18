import * as v from "valibot";

/**
 * Attributes for meterSig.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSig.vis.html
 */
export const AttrMeterSigVisSchema = v.object({
  // TODO: Add meterSig.vis attributes
});

export type AttrMeterSigVisData = v.InferOutput<typeof AttrMeterSigVisSchema>;
