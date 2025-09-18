import * as v from "valibot";

/**
 * Attributes for tempo.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tempo.vis.html
 */
export const AttrTempoVisSchema = v.object({
  // TODO: Add tempo.vis attributes
});

export type AttrTempoVisData = v.InferOutput<typeof AttrTempoVisSchema>;
