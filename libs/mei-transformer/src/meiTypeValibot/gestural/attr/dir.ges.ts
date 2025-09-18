import * as v from "valibot";

/**
 * Attributes for dir.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dir.ges.html
 */
export const AttrDirGesSchema = v.object({
  // TODO: Add dir.ges attributes
});

export type AttrDirGesData = v.InferOutput<typeof AttrDirGesSchema>;
