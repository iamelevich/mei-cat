import * as v from "valibot";

/**
 * Attributes for duration logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.duration.log.html
 */
export const AttrDurationLogSchema = v.object({
  // TODO: Add duration logging attributes
});

export type AttrDurationLogData = v.InferOutput<typeof AttrDurationLogSchema>;
