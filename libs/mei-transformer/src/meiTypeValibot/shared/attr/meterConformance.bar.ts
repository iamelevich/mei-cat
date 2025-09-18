import * as v from "valibot";

/**
 * Attributes for meter conformance bar.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meterConformance.bar.html
 */
export const AttrMeterConformanceBarSchema = v.object({
  // TODO: Add meter conformance bar attributes
});

export type AttrMeterConformanceBarData = v.InferOutput<typeof AttrMeterConformanceBarSchema>;
