import * as v from "valibot";

/**
 * Attributes for keySig.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keySig.anl.html
 */
export const AttrKeySigAnlSchema = v.object({
  // TODO: Add keySig.anl attributes
});

export type AttrKeySigAnlData = v.InferOutput<typeof AttrKeySigAnlSchema>;
