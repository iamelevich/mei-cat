import * as v from "valibot";

/**
 * Attributes for lyrics.anl.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lyrics.anl.html
 */
export const AttrLyricsAnlSchema = v.object({
  // TODO: Add lyrics.anl attributes
});

export type AttrLyricsAnlData = v.InferOutput<typeof AttrLyricsAnlSchema>;
