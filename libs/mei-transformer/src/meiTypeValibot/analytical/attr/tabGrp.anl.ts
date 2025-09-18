import * as v from "valibot";

/**
 * Attributes for tabGrp.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabGrp.anl.html
 */
export const AttrTabGrpAnlSchema = v.object({
  // TODO: Add tabGrp.anl attributes
});

export type AttrTabGrpAnlData = v.InferOutput<typeof AttrTabGrpAnlSchema>;
