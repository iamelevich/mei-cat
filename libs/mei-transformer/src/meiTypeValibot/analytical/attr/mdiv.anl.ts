import * as v from "valibot";

/**
 * Attributes for mdiv.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mdiv.anl.html
 */
export const AttrMdivAnlSchema = v.object({
  // TODO: Add mdiv.anl attributes
});

export type AttrMdivAnlData = v.InferOutput<typeof AttrMdivAnlSchema>;
