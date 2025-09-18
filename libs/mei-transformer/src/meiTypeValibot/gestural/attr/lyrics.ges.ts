import * as v from "valibot";

/**
 * Attributes for lyrics.ges.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lyrics.ges.html
 */
export const AttrLyricsGesSchema = v.object({
  // TODO: Add lyrics.ges attributes
});

export type AttrLyricsGesData = v.InferOutput<typeof AttrLyricsGesSchema>;
