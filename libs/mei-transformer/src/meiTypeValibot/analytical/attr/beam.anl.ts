import * as v from "valibot";

/**
 * Attributes for beam.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beam.anl.html
 */
export const AttrBeamAnlSchema = v.object({
  // TODO: Add beam.anl attributes
});

export type AttrBeamAnlData = v.InferOutput<typeof AttrBeamAnlSchema>;
