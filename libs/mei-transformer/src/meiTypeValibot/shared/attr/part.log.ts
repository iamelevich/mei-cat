import * as v from "valibot";

/**
 * Attributes for part logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.part.log.html
 */
export const AttrPartLogSchema = v.object({
  // TODO: Add part logging attributes
});

export type AttrPartLogData = v.InferOutput<typeof AttrPartLogSchema>;
