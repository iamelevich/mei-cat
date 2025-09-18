import * as v from "valibot";

/**
 * Attributes for lyrics.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lyrics.log.html
 */
export const AttrLyricsLogSchema = v.object({
  // TODO: Add lyrics.log attributes
});

export type AttrLyricsLogData = v.InferOutput<typeof AttrLyricsLogSchema>;
