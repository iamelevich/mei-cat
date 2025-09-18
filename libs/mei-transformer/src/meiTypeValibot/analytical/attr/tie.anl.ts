import * as v from "valibot";

/**
 * Attributes for tie.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tie.anl.html
 */
export const AttrTieAnlSchema = v.object({
  // TODO: Add tie.anl attributes
});

export type AttrTieAnlData = v.InferOutput<typeof AttrTieAnlSchema>;
