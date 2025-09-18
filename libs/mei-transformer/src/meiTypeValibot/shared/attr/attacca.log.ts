import * as v from "valibot";

/**
 * Attributes for attacca logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.attacca.log.html
 */
export const AttrAttaccaLogSchema = v.object({
  // TODO: Add attacca logging attributes
});

export type AttrAttaccaLogData = v.InferOutput<typeof AttrAttaccaLogSchema>;
