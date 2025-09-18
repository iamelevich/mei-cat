import * as v from "valibot";

/**
 * Attributes for key signature logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keySig.log.html
 */
export const AttrKeySigLogSchema = v.object({
  // TODO: Add key signature logging attributes
});

export type AttrKeySigLogData = v.InferOutput<typeof AttrKeySigLogSchema>;
