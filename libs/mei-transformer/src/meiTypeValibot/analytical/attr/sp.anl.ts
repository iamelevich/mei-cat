import * as v from "valibot";

/**
 * Attributes for sp.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sp.anl.html
 */
export const AttrSpAnlSchema = v.object({
  // TODO: Add sp.anl attributes
});

export type AttrSpAnlData = v.InferOutput<typeof AttrSpAnlSchema>;
