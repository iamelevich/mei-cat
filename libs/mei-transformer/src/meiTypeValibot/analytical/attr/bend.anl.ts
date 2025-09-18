import * as v from "valibot";

/**
 * Attributes for bend.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.bend.anl.html
 */
export const AttrBendAnlSchema = v.object({
  // TODO: Add bend.anl attributes
});

export type AttrBendAnlData = v.InferOutput<typeof AttrBendAnlSchema>;
