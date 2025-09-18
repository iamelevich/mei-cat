import * as v from "valibot";

/**
 * Attributes for dot.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.dot.anl.html
 */
export const AttrDotAnlSchema = v.object({
  // TODO: Add dot.anl attributes
});

export type AttrDotAnlData = v.InferOutput<typeof AttrDotAnlSchema>;
