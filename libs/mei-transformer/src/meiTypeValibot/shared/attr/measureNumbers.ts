import * as v from "valibot";

/**
 * Attributes for measure numbers.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.measureNumbers.html
 */
export const AttrMeasureNumbersSchema = v.object({
  // TODO: Add measure numbers attributes
});

export type AttrMeasureNumbersData = v.InferOutput<typeof AttrMeasureNumbersSchema>;
