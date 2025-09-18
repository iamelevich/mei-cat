import * as v from "valibot";

/**
 * Attributes for pedal.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pedal.log.html
 */
export const AttrPedalLogSchema = v.object({
  // TODO: Add pedal.log attributes
});

export type AttrPedalLogData = v.InferOutput<typeof AttrPedalLogSchema>;
