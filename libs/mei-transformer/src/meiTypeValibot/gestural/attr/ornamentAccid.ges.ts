import * as v from "valibot";

/**
 * Attributes for ornamentAccid.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ornamentAccid.ges.html
 */
export const AttrOrnamentAccidGesSchema = v.object({
  // TODO: Add ornamentAccid.ges attributes
});

export type AttrOrnamentAccidGesData = v.InferOutput<typeof AttrOrnamentAccidGesSchema>;
