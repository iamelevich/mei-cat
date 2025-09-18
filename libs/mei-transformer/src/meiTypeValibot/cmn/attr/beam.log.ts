import * as v from "valibot";

/**
 * Attributes for beam.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beam.log.html
 */
export const AttrBeamLogSchema = v.object({
  // TODO: Add beam.log attributes
});

export type AttrBeamLogData = v.InferOutput<typeof AttrBeamLogSchema>;
