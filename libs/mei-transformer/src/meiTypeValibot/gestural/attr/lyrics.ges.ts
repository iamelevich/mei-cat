import * as v from "valibot";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lyrics.ges.html
 */
export const AttrLyricsGesSchema = v.object({
	// No attributes in MEI schema
});

export type AttrLyricsGesData = v.InferOutput<typeof AttrLyricsGesSchema>;
