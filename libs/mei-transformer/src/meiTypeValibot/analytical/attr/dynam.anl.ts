import * as v from "valibot";

/**
 * Attributes for dynam.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dynam.anl.html
 */
export const AttrDynamAnlSchema = v.object({
  // TODO: Add dynam.anl attributes
});

export type AttrDynamAnlData = v.InferOutput<typeof AttrDynamAnlSchema>;
