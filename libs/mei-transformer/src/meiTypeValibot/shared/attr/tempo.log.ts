import * as v from "valibot";

/**
 * Attributes for tempo logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tempo.log.html
 */
export const AttrTempoLogSchema = v.object({
  // TODO: Add tempo logging attributes
});

export type AttrTempoLogData = v.InferOutput<typeof AttrTempoLogSchema>;
