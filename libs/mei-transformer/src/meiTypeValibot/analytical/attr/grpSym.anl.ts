import * as v from "valibot";

/**
 * Attributes for grpSym.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.grpSym.anl.html
 */
export const AttrGrpSymAnlSchema = v.object({
  // TODO: Add grpSym.anl attributes
});

export type AttrGrpSymAnlData = v.InferOutput<typeof AttrGrpSymAnlSchema>;
