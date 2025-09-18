import * as v from "valibot";

/**
 * Attributes for clef.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clef.vis.html
 */
export const AttrClefVisSchema = v.object({
  // TODO: Add clef.vis attributes
});

export type AttrClefVisData = v.InferOutput<typeof AttrClefVisSchema>;
