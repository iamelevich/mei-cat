import * as v from "valibot";

/**
 * Attributes for meter signature logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSig.log.html
 */
export const AttrMeterSigLogSchema = v.object({
  // TODO: Add meter signature logging attributes
});

export type AttrMeterSigLogData = v.InferOutput<typeof AttrMeterSigLogSchema>;
