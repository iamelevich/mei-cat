import * as v from "valibot";

/**
 * Attributes for metaMark.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.metaMark.ges.html
 */
export const AttrMetaMarkGesSchema = v.object({
  // TODO: Add metaMark.ges attributes
});

export type AttrMetaMarkGesData = v.InferOutput<typeof AttrMetaMarkGesSchema>;
