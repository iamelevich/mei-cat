import * as v from "valibot";

/**
 * Attributes for measure.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.measure.anl.html
 */
export const AttrMeasureAnlSchema = v.object({
  // TODO: Add measure.anl attributes
});

export type AttrMeasureAnlData = v.InferOutput<typeof AttrMeasureAnlSchema>;
