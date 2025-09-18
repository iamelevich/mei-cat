import * as v from "valibot";

/**
 * Attributes for ornam.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ornam.anl.html
 */
export const AttrOrnamAnlSchema = v.object({
  // TODO: Add ornam.anl attributes
});

export type AttrOrnamAnlData = v.InferOutput<typeof AttrOrnamAnlSchema>;
