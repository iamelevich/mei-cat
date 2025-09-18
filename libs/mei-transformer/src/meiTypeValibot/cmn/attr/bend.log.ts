import * as v from "valibot";

/**
 * Attributes for bend.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bend.log.html
 */
export const AttrBendLogSchema = v.object({
  // TODO: Add bend.log attributes
});

export type AttrBendLogData = v.InferOutput<typeof AttrBendLogSchema>;
