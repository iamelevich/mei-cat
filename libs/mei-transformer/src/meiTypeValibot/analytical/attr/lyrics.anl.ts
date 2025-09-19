import * as v from "valibot";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lyrics.anl.html
 */
export const AttrLyricsAnlSchema = v.object({
	// No attributes in MEI schema
});

export type AttrLyricsAnlData = v.InferOutput<typeof AttrLyricsAnlSchema>;
