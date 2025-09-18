import * as v from "valibot";

/**
 * Attributes for measure.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.measure.vis.html
 */
export const AttrMeasureVisSchema = v.object({
  // TODO: Add measure.vis attributes
});

export type AttrMeasureVisData = v.InferOutput<typeof AttrMeasureVisSchema>;
