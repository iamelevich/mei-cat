import * as v from "valibot";

/**
 * Attributes for meterSigGrp.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSigGrp.ges.html
 */
export const AttrMeterSigGrpGesSchema = v.object({
  // TODO: Add meterSigGrp.ges attributes
});

export type AttrMeterSigGrpGesData = v.InferOutput<typeof AttrMeterSigGrpGesSchema>;
