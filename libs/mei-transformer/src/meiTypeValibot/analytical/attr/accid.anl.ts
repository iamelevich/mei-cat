import * as v from "valibot";

/**
 * Attributes for accid.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.accid.anl.html
 */
export const AttrAccidAnlSchema = v.object({
  // TODO: Add accid.anl attributes
});

export type AttrAccidAnlData = v.InferOutput<typeof AttrAccidAnlSchema>;
