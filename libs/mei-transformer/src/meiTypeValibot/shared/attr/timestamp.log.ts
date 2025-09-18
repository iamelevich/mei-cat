import * as v from "valibot";

/**
 * Attributes for timestamp logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.timestamp.log.html
 */
export const AttrTimestampLogSchema = v.object({
  // TODO: Add timestamp logging attributes
});

export type AttrTimestampLogData = v.InferOutput<typeof AttrTimestampLogSchema>;
