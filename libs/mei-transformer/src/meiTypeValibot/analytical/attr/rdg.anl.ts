import * as v from "valibot";

/**
 * Attributes for rdg.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.rdg.anl.html
 */
export const AttrRdgAnlSchema = v.object({
  // TODO: Add rdg.anl attributes
});

export type AttrRdgAnlData = v.InferOutput<typeof AttrRdgAnlSchema>;
