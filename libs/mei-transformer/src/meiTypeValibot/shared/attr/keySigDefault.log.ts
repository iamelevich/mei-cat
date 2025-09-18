import * as v from "valibot";

/**
 * Attributes for key signature default logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keySigDefault.log.html
 */
export const AttrKeySigDefaultLogSchema = v.object({
  // TODO: Add key signature default logging attributes
});

export type AttrKeySigDefaultLogData = v.InferOutput<typeof AttrKeySigDefaultLogSchema>;
