import * as v from "valibot";

/**
 * Attributes for anchoredText.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.anchoredText.log.html
 */
export const AttrAnchoredTextLogSchema = v.object({
  // TODO: Add anchoredText.log attributes
});

export type AttrAnchoredTextLogData = v.InferOutput<typeof AttrAnchoredTextLogSchema>;
