import * as v from "valibot";

/**
 * Attributes for lyric style.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lyricStyle.html
 */
export const AttrLyricStyleSchema = v.object({
  // TODO: Add lyric style attributes
});

export type AttrLyricStyleData = v.InferOutput<typeof AttrLyricStyleSchema>;
