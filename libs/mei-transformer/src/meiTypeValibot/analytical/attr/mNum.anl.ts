import * as v from "valibot";

/**
 * Attributes for mNum.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mNum.anl.html
 */
export const AttrMNumAnlSchema = v.object({
  // TODO: Add mNum.anl attributes
});

export type AttrMNumAnlData = v.InferOutput<typeof AttrMNumAnlSchema>;
