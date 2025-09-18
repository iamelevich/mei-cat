import * as v from "valibot";

/**
 * Attributes for lv.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lv.anl.html
 */
export const AttrLvAnlSchema = v.object({
  // TODO: Add lv.anl attributes
});

export type AttrLvAnlData = v.InferOutput<typeof AttrLvAnlSchema>;
