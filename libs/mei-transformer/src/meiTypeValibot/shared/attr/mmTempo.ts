import * as v from "valibot";

/**
 * Attributes for mm tempo.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mmTempo.html
 */
export const AttrMmTempoSchema = v.object({
  // TODO: Add mm tempo attributes
});

export type AttrMmTempoData = v.InferOutput<typeof AttrMmTempoSchema>;
