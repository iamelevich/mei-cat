import * as v from "valibot";

/**
 * Attributes for measure.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.measure.ges.html
 */
export const AttrMeasureGesSchema = v.object({
  // TODO: Add measure.ges attributes
});

export type AttrMeasureGesData = v.InferOutput<typeof AttrMeasureGesSchema>;
