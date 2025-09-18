import * as v from "valibot";

/**
 * Attributes for verse.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.verse.anl.html
 */
export const AttrVerseAnlSchema = v.object({
  // TODO: Add verse.anl attributes
});

export type AttrVerseAnlData = v.InferOutput<typeof AttrVerseAnlSchema>;
