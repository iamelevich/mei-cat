import * as v from "valibot";

/**
 * Attributes for anchoredText.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.anchoredText.ges.html
 */
export const AttrAnchoredTextGesSchema = v.object({
  // TODO: Add anchoredText.ges attributes
});

export type AttrAnchoredTextGesData = v.InferOutput<typeof AttrAnchoredTextGesSchema>;
