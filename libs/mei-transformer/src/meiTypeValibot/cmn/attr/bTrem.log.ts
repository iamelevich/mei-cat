import * as v from "valibot";

/**
 * Attributes for bTrem.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bTrem.log.html
 */
export const AttrBTremLogSchema = v.object({
  // TODO: Add bTrem.log attributes
});

export type AttrBTremLogData = v.InferOutput<typeof AttrBTremLogSchema>;
