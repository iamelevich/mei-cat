import * as v from "valibot";

/**
 * Attributes that describe default typography of lyrics..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.lyricStyle.html
 */
export const AttrLyricStyleSchema = v.object({
	// Direct attributes
	/**
	 * Describes the alignment of lyric syllables associated with a note or chord.
	 */
	"@lyric.align": v.optional(v.string()),
	/**
	 * Sets the font family default value for lyrics.
	 */
	"@lyric.fam": v.optional(v.string()),
	/**
	 * Sets the font name default value for lyrics.
	 */
	"@lyric.name": v.optional(v.string()),
	/**
	 * Sets the default font size value for lyrics.
	 */
	"@lyric.size": v.optional(v.string()),
	/**
	 * Sets the default font style value for lyrics.
	 */
	"@lyric.style": v.optional(v.string()),
	/**
	 * Sets the default font weight value for lyrics.
	 */
	"@lyric.weight": v.optional(v.string()),
});

export type AttrLyricStyleData = v.InferOutput<typeof AttrLyricStyleSchema>;
