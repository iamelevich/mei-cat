import * as v from "valibot";

/**
 * Attributes for harpPedal.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harpPedal.log.html
 */
export const AttrHarpPedalLogSchema = v.object({
  // TODO: Add harpPedal.log attributes
});

export type AttrHarpPedalLogData = v.InferOutput<typeof AttrHarpPedalLogSchema>;
