import * as v from "valibot";

/**
 * Attributes for measurement.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.measurement.html
 */
export const AttrMeasurementSchema = v.object({
  // TODO: Add measurement attributes
});

export type AttrMeasurementData = v.InferOutput<typeof AttrMeasurementSchema>;
