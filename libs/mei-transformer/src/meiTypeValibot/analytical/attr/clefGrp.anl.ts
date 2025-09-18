import * as v from "valibot";

/**
 * Attributes for clefGrp.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clefGrp.anl.html
 */
export const AttrClefGrpAnlSchema = v.object({
  // TODO: Add clefGrp.anl attributes
});

export type AttrClefGrpAnlData = v.InferOutput<typeof AttrClefGrpAnlSchema>;
