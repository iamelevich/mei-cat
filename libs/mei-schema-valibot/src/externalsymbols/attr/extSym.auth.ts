import * as v from "valibot";

/**
 * Attributes that point to an external symbol authority..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.extSym.auth.html
 */
export const AttrExtSymAuthSchema = v.object({
	// Direct attributes
	/**
	 * A name or label associated with the controlled vocabulary from which the value of <att>glyph.name</att> or <att>glyph.num</att> is taken, or the textual content of the element.
	 */
	"@glyph.auth": v.optional(v.string()),
	/**
	 * The web-accessible location of the controlled vocabulary from which the value of <att>glyph.name</att> or <att>glyph.num</att> is taken, or the textual content of the element.
	 */
	"@glyph.uri": v.optional(v.string()),
});

export type AttrExtSymAuthData = v.InferOutput<typeof AttrExtSymAuthSchema>;
