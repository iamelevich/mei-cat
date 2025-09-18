import * as v from "valibot";

/**
 * Attributes for harpPedal.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harpPedal.anl.html
 */
export const AttrHarpPedalAnlSchema = v.object({
  // TODO: Add harpPedal.anl attributes
});

export type AttrHarpPedalAnlData = v.InferOutput<typeof AttrHarpPedalAnlSchema>;
