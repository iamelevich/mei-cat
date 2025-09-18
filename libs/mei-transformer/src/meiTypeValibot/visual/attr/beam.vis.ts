import * as v from "valibot";

/**
 * Attributes for beam.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beam.vis.html
 */
export const AttrBeamVisSchema = v.object({
  // TODO: Add beam.vis attributes
});

export type AttrBeamVisData = v.InferOutput<typeof AttrBeamVisSchema>;
