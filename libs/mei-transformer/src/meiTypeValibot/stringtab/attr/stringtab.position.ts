import * as v from "valibot";

/**
 * Attributes for stringtab.position.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stringtab.position.html
 */
export const AttrStringtabPositionSchema = v.object({
  // TODO: Add stringtab.position attributes
});

export type AttrStringtabPositionData = v.InferOutput<typeof AttrStringtabPositionSchema>;
