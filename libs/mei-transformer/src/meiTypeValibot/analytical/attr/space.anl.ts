import * as v from "valibot";

/**
 * Attributes for space.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.space.anl.html
 */
export const AttrSpaceAnlSchema = v.object({
  // TODO: Add space.anl attributes
});

export type AttrSpaceAnlData = v.InferOutput<typeof AttrSpaceAnlSchema>;
