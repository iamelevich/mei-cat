import * as v from "valibot";

/**
 * Attributes for dynamics logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dynam.log.html
 */
export const AttrDynamLogSchema = v.object({
  // TODO: Add dynamics logging attributes
});

export type AttrDynamLogData = v.InferOutput<typeof AttrDynamLogSchema>;
