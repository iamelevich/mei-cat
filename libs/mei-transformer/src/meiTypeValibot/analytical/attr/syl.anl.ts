import * as v from "valibot";

/**
 * Attributes for syl.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.syl.anl.html
 */
export const AttrSylAnlSchema = v.object({
  // TODO: Add syl.anl attributes
});

export type AttrSylAnlData = v.InferOutput<typeof AttrSylAnlSchema>;
