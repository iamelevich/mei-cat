import * as v from "valibot";

/**
 * Attributes for f.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.f.anl.html
 */
export const AttrFAnlSchema = v.object({
  // TODO: Add f.anl attributes
});

export type AttrFAnlData = v.InferOutput<typeof AttrFAnlSchema>;
