import * as v from "valibot";

/**
 * Attributes for meterSig.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSig.ges.html
 */
export const AttrMeterSigGesSchema = v.object({
  // TODO: Add meterSig.ges attributes
});

export type AttrMeterSigGesData = v.InferOutput<typeof AttrMeterSigGesSchema>;
