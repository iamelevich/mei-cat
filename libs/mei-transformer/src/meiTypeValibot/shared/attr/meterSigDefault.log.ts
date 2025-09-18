import * as v from "valibot";

/**
 * Attributes for meter signature default logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterSigDefault.log.html
 */
export const AttrMeterSigDefaultLogSchema = v.object({
  // TODO: Add meter signature default logging attributes
});

export type AttrMeterSigDefaultLogData = v.InferOutput<typeof AttrMeterSigDefaultLogSchema>;
