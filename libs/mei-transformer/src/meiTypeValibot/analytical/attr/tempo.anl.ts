import * as v from "valibot";

/**
 * Attributes for tempo.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tempo.anl.html
 */
export const AttrTempoAnlSchema = v.object({
  // TODO: Add tempo.anl attributes
});

export type AttrTempoAnlData = v.InferOutput<typeof AttrTempoAnlSchema>;
