import * as v from "valibot";

/**
 * Attributes for graceGrp.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.graceGrp.anl.html
 */
export const AttrGraceGrpAnlSchema = v.object({
  // TODO: Add graceGrp.anl attributes
});

export type AttrGraceGrpAnlData = v.InferOutput<typeof AttrGraceGrpAnlSchema>;
