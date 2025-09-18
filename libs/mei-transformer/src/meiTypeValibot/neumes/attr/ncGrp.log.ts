import * as v from "valibot";

/**
 * Attributes for ncGrp.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.ncGrp.log.html
 */
export const AttrNcGrpLogSchema = v.object({
  // TODO: Add ncGrp.log attributes
});

export type AttrNcGrpLogData = v.InferOutput<typeof AttrNcGrpLogSchema>;
