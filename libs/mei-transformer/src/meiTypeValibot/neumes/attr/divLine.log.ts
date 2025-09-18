import * as v from "valibot";

/**
 * Attributes for divLine.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.divLine.log.html
 */
export const AttrDivLineLogSchema = v.object({
  // TODO: Add divLine.log attributes
});

export type AttrDivLineLogData = v.InferOutput<typeof AttrDivLineLogSchema>;
