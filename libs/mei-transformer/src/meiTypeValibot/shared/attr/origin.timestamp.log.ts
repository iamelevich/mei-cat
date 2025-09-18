import * as v from "valibot";

/**
 * Attributes for origin timestamp logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.origin.timestamp.log.html
 */
export const AttrOriginTimestampLogSchema = v.object({
  // TODO: Add origin timestamp logging attributes
});

export type AttrOriginTimestampLogData = v.InferOutput<typeof AttrOriginTimestampLogSchema>;
