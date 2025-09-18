import * as v from "valibot";

/**
 * Attributes for caesura logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.caesura.log.html
 */
export const AttrCaesuraLogSchema = v.object({
  // TODO: Add caesura logging attributes
});

export type AttrCaesuraLogData = v.InferOutput<typeof AttrCaesuraLogSchema>;
