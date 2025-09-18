import * as v from "valibot";

/**
 * Attributes for measure.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.measure.log.html
 */
export const AttrMeasureLogSchema = v.object({
  // TODO: Add measure.log attributes
});

export type AttrMeasureLogData = v.InferOutput<typeof AttrMeasureLogSchema>;
