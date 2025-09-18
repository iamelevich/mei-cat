import * as v from "valibot";

/**
 * Attributes for dot logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dot.log.html
 */
export const AttrDotLogSchema = v.object({
  // TODO: Add dot logging attributes
});

export type AttrDotLogData = v.InferOutput<typeof AttrDotLogSchema>;
