import * as v from "valibot";

/**
 * Attributes for meter conformance.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterConformance.html
 */
export const AttrMeterConformanceSchema = v.object({
  // TODO: Add meter conformance attributes
});

export type AttrMeterConformanceData = v.InferOutput<typeof AttrMeterConformanceSchema>;
