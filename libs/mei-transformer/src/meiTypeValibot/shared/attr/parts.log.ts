import * as v from "valibot";

/**
 * Attributes for parts logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.parts.log.html
 */
export const AttrPartsLogSchema = v.object({
  // TODO: Add parts logging attributes
});

export type AttrPartsLogData = v.InferOutput<typeof AttrPartsLogSchema>;
