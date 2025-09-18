import * as v from "valibot";

/**
 * Attributes for plist.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.plist.html
 */
export const AttrPlistSchema = v.object({
  // TODO: Add plist attributes
});

export type AttrPlistData = v.InferOutput<typeof AttrPlistSchema>;
