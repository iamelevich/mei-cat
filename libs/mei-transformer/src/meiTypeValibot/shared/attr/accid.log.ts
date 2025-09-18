import * as v from "valibot";

/**
 * Attributes for accidental logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.accid.log.html
 */
export const AttrAccidLogSchema = v.object({
  // TODO: Add accidental logging attributes
});

export type AttrAccidLogData = v.InferOutput<typeof AttrAccidLogSchema>;
