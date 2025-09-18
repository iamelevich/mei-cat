import * as v from "valibot";

/**
 * Attributes for tempo.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tempo.ges.html
 */
export const AttrTempoGesSchema = v.object({
  // TODO: Add tempo.ges attributes
});

export type AttrTempoGesData = v.InferOutput<typeof AttrTempoGesSchema>;
