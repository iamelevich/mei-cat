import * as v from "valibot";

/**
 * Attributes for stem.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stem.vis.html
 */
export const AttrStemVisSchema = v.object({
  // TODO: Add stem.vis attributes
});

export type AttrStemVisData = v.InferOutput<typeof AttrStemVisSchema>;
