import * as v from "valibot";

/**
 * Attributes for ncGrp.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ncGrp.anl.html
 */
export const AttrNcGrpAnlSchema = v.object({
  // TODO: Add ncGrp.anl attributes
});

export type AttrNcGrpAnlData = v.InferOutput<typeof AttrNcGrpAnlSchema>;
