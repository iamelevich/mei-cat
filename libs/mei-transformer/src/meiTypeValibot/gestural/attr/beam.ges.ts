import * as v from "valibot";

/**
 * Attributes for beam.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beam.ges.html
 */
export const AttrBeamGesSchema = v.object({
  // TODO: Add beam.ges attributes
});

export type AttrBeamGesData = v.InferOutput<typeof AttrBeamGesSchema>;
