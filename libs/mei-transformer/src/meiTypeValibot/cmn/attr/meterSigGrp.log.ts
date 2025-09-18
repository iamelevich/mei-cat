import * as v from "valibot";

/**
 * Attributes for meterSigGrp.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSigGrp.log.html
 */
export const AttrMeterSigGrpLogSchema = v.object({
  // TODO: Add meterSigGrp.log attributes
});

export type AttrMeterSigGrpLogData = v.InferOutput<typeof AttrMeterSigGrpLogSchema>;
