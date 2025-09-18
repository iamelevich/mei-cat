import * as v from "valibot";

/**
 * Attributes for lv.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lv.log.html
 */
export const AttrLvLogSchema = v.object({
  // TODO: Add lv.log attributes
});

export type AttrLvLogData = v.InferOutput<typeof AttrLvLogSchema>;
