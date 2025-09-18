import * as v from "valibot";

/**
 * Attributes for metaMark.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.metaMark.anl.html
 */
export const AttrMetaMarkAnlSchema = v.object({
  // TODO: Add metaMark.anl attributes
});

export type AttrMetaMarkAnlData = v.InferOutput<typeof AttrMetaMarkAnlSchema>;
