import * as v from "valibot";

/**
 * Attributes for keyAccid.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keyAccid.anl.html
 */
export const AttrKeyAccidAnlSchema = v.object({
  // TODO: Add keyAccid.anl attributes
});

export type AttrKeyAccidAnlData = v.InferOutput<typeof AttrKeyAccidAnlSchema>;
