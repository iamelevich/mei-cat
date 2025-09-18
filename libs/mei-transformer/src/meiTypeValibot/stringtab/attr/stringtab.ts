import * as v from "valibot";

/**
 * Attributes for stringtab.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stringtab.html
 */
export const AttrStringtabSchema = v.object({
  // TODO: Add stringtab attributes
});

export type AttrStringtabData = v.InferOutput<typeof AttrStringtabSchema>;
