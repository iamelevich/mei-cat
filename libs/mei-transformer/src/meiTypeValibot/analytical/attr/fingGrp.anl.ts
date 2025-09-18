import * as v from "valibot";

/**
 * Attributes for fingGrp.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.fingGrp.anl.html
 */
export const AttrFingGrpAnlSchema = v.object({
  // TODO: Add fingGrp.anl attributes
});

export type AttrFingGrpAnlData = v.InferOutput<typeof AttrFingGrpAnlSchema>;
