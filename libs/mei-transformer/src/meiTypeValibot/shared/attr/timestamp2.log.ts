import * as v from "valibot";

/**
 * Attributes for timestamp2 logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.timestamp2.log.html
 */
export const AttrTimestamp2LogSchema = v.object({
  // TODO: Add timestamp2 logging attributes
});

export type AttrTimestamp2LogData = v.InferOutput<typeof AttrTimestamp2LogSchema>;
