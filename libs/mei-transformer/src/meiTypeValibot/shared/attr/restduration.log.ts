import * as v from "valibot";

/**
 * Attributes for rest duration logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.restduration.log.html
 */
export const AttrRestdurationLogSchema = v.object({
  // TODO: Add rest duration logging attributes
});

export type AttrRestdurationLogData = v.InferOutput<typeof AttrRestdurationLogSchema>;
