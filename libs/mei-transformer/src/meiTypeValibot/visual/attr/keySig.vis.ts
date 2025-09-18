import * as v from "valibot";

/**
 * Attributes for keySig.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keySig.vis.html
 */
export const AttrKeySigVisSchema = v.object({
  // TODO: Add keySig.vis attributes
});

export type AttrKeySigVisData = v.InferOutput<typeof AttrKeySigVisSchema>;
