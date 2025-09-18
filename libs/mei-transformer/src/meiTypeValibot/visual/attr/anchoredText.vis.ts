import * as v from "valibot";

/**
 * Attributes for anchoredText.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.anchoredText.vis.html
 */
export const AttrAnchoredTextVisSchema = v.object({
  // TODO: Add anchoredText.vis attributes
});

export type AttrAnchoredTextVisData = v.InferOutput<typeof AttrAnchoredTextVisSchema>;
