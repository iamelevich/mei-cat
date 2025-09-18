import * as v from "valibot";

/**
 * Attributes for intervalMelodic.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.intervalMelodic.html
 */
export const AttrIntervalMelodicSchema = v.object({
  // TODO: Add intervalMelodic attributes
});

export type AttrIntervalMelodicData = v.InferOutput<typeof AttrIntervalMelodicSchema>;
