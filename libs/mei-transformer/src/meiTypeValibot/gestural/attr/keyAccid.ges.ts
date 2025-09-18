import * as v from "valibot";

/**
 * Attributes for keyAccid.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keyAccid.ges.html
 */
export const AttrKeyAccidGesSchema = v.object({
  // TODO: Add keyAccid.ges attributes
});

export type AttrKeyAccidGesData = v.InferOutput<typeof AttrKeyAccidGesSchema>;
