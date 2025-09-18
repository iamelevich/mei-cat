import * as v from "valibot";

/**
 * Attributes for pedal.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pedal.vis.html
 */
export const AttrPedalVisSchema = v.object({
  // TODO: Add pedal.vis attributes
});

export type AttrPedalVisData = v.InferOutput<typeof AttrPedalVisSchema>;
