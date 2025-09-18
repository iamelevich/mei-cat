import * as v from "valibot";

/**
 * Attributes for dir.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dir.anl.html
 */
export const AttrDirAnlSchema = v.object({
  // TODO: Add dir.anl attributes
});

export type AttrDirAnlData = v.InferOutput<typeof AttrDirAnlSchema>;
