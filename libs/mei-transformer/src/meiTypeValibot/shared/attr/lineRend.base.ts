import * as v from "valibot";

/**
 * Attributes for base line rendering.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lineRend.base.html
 */
export const AttrLineRendBaseSchema = v.object({
  // TODO: Add base line rendering attributes
});

export type AttrLineRendBaseData = v.InferOutput<typeof AttrLineRendBaseSchema>;
