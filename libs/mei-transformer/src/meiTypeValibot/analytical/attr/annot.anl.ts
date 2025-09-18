import * as v from "valibot";

/**
 * Attributes for annot.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.annot.anl.html
 */
export const AttrAnnotAnlSchema = v.object({
  // TODO: Add annot.anl attributes
});

export type AttrAnnotAnlData = v.InferOutput<typeof AttrAnnotAnlSchema>;
