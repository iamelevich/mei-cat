import * as v from "valibot";

/**
 * Attributes for keySigDefault.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keySigDefault.anl.html
 */
export const AttrKeySigDefaultAnlSchema = v.object({
  // TODO: Add keySigDefault.anl attributes
});

export type AttrKeySigDefaultAnlData = v.InferOutput<typeof AttrKeySigDefaultAnlSchema>;
