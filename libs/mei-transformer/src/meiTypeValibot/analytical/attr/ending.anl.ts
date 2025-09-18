import * as v from "valibot";

/**
 * Attributes for ending.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ending.anl.html
 */
export const AttrEndingAnlSchema = v.object({
  // TODO: Add ending.anl attributes
});

export type AttrEndingAnlData = v.InferOutput<typeof AttrEndingAnlSchema>;
