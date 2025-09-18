import * as v from "valibot";

/**
 * Attributes for keySigDefault.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keySigDefault.vis.html
 */
export const AttrKeySigDefaultVisSchema = v.object({
  // TODO: Add keySigDefault.vis attributes
});

export type AttrKeySigDefaultVisData = v.InferOutput<typeof AttrKeySigDefaultVisSchema>;
