import * as v from "valibot";

/**
 * Attributes for lyrics.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lyrics.vis.html
 */
export const AttrLyricsVisSchema = v.object({
  // TODO: Add lyrics.vis attributes
});

export type AttrLyricsVisData = v.InferOutput<typeof AttrLyricsVisSchema>;
