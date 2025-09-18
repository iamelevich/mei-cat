import * as v from "valibot";

/**
 * Attributes for meterSigGrp.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSigGrp.anl.html
 */
export const AttrMeterSigGrpAnlSchema = v.object({
  // TODO: Add meterSigGrp.anl attributes
});

export type AttrMeterSigGrpAnlData = v.InferOutput<typeof AttrMeterSigGrpAnlSchema>;
