import * as v from "valibot";

/**
 * Attributes that specify names or values taken from an external symbol authority..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.extSym.names.html
 */
export const AttrExtSymNamesSchema = v.object({
	// Direct attributes
	/**
	 * Glyph name.
	 */
	"@glyph.name": v.optional(v.string()),
	/**
	 * Numeric glyph reference in hexadecimal notation, <abbr>e.g.</abbr>, "#xE000" or "U+E000". N.B. SMuFL version 1.18 uses the range U+E000 - U+ECBF.
	 */
	"@glyph.num": v.optional(v.string()),
});

export type AttrExtSymNamesData = v.InferOutput<typeof AttrExtSymNamesSchema>;
