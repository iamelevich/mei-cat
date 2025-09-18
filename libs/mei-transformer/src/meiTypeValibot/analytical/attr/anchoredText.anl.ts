import * as v from "valibot";

/**
 * Attributes for anchoredText.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.anchoredText.anl.html
 */
export const AttrAnchoredTextAnlSchema = v.object({
  // TODO: Add anchoredText.anl attributes
});

export type AttrAnchoredTextAnlData = v.InferOutput<typeof AttrAnchoredTextAnlSchema>;
