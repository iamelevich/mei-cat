import * as v from "valibot";

/**
 * Attributes for verse.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.verse.vis.html
 */
export const AttrVerseVisSchema = v.object({
  // TODO: Add verse.vis attributes
});

export type AttrVerseVisData = v.InferOutput<typeof AttrVerseVisSchema>;
