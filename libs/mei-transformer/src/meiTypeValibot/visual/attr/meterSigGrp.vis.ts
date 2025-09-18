import * as v from "valibot";

/**
 * Attributes for meterSigGrp.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSigGrp.vis.html
 */
export const AttrMeterSigGrpVisSchema = v.object({
  // TODO: Add meterSigGrp.vis attributes
});

export type AttrMeterSigGrpVisData = v.InferOutput<typeof AttrMeterSigGrpVisSchema>;
