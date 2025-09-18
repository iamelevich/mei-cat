import * as v from "valibot";

/**
 * Attributes for fTrem.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fTrem.log.html
 */
export const AttrFTremLogSchema = v.object({
  // TODO: Add fTrem.log attributes
});

export type AttrFTremLogData = v.InferOutput<typeof AttrFTremLogSchema>;
