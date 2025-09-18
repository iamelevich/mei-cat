import * as v from "valibot";

/**
 * Attributes for pitch.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pitch.html
 */
export const AttrPitchSchema = v.object({
  // TODO: Add pitch attributes
});

export type AttrPitchData = v.InferOutput<typeof AttrPitchSchema>;
