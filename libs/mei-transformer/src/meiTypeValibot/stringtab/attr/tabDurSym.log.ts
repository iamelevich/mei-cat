import * as v from "valibot";

/**
 * Attributes for tabDurSym.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tabDurSym.log.html
 */
export const AttrTabDurSymLogSchema = v.object({
  // TODO: Add tabDurSym.log attributes
});

export type AttrTabDurSymLogData = v.InferOutput<typeof AttrTabDurSymLogSchema>;
