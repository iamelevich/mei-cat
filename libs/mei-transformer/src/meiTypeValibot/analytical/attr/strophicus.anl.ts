import * as v from "valibot";

/**
 * Attributes for strophicus.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.strophicus.anl.html
 */
export const AttrStrophicusAnlSchema = v.object({
  // TODO: Add strophicus.anl attributes
});

export type AttrStrophicusAnlData = v.InferOutput<typeof AttrStrophicusAnlSchema>;
