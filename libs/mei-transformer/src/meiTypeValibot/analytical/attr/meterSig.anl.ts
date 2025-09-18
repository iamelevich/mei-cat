import * as v from "valibot";

/**
 * Attributes for meterSig.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSig.anl.html
 */
export const AttrMeterSigAnlSchema = v.object({
  // TODO: Add meterSig.anl attributes
});

export type AttrMeterSigAnlData = v.InferOutput<typeof AttrMeterSigAnlSchema>;
