import * as v from "valibot";

/**
 * Typographical attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.typography.html
 */
export const AttrTypographySchema = v.object({
	// Direct attributes
	/**
	 * Contains the name of a font-family.
	 */
	"@fontfam": v.optional(v.string()),
	/**
	 * Holds the name of a font.
	 */
	"@fontname": v.optional(v.string()),
	/**
	 * Indicates the size of a font expressed in printers' points, <abbr>i.e.</abbr>, 1/72nd of an inch, relative terms, <abbr>e.g.</abbr>, <val>small</val>, <val>larger</val>, <abbr>etc.</abbr>, or percentage values relative to <val>normal</val> size, <abbr>e.g.</abbr>, <val>125%</val>.
	 */
	"@fontsize": v.optional(v.string()),
	/**
	 * Records the style of a font, <abbr>i.e.</abbr>, <val>italic</val>, <val>oblique</val>, or <val>normal</val>.
	 */
	"@fontstyle": v.optional(v.string()),
	/**
	 * Used to indicate bold type.
	 */
	"@fontweight": v.optional(v.string()),
	/**
	 * Indicates letter spacing (aka tracking) in analogy to the CSS letter-spacing property.
	 */
	"@letterspacing": v.optional(v.string()),
	/**
	 * Indicates line height in analogy to the CSS line-height property.
	 */
	"@lineheight": v.optional(v.string()),
});

export type AttrTypographyData = v.InferOutput<typeof AttrTypographySchema>;
