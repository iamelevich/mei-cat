import * as v from "valibot";

/**
 * Attributes for tabDurSym.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabDurSym.anl.html
 */
export const AttrTabDurSymAnlSchema = v.object({
  // TODO: Add tabDurSym.anl attributes
});

export type AttrTabDurSymAnlData = v.InferOutput<typeof AttrTabDurSymAnlSchema>;
