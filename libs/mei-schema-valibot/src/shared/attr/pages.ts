import * as v from "valibot";

/**
 * Attributes that record page-level layout information..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pages.html
 */
export const AttrPagesSchema = v.object({
	// Direct attributes
	/**
	 * Indicates the amount of whitespace at the bottom of a page.
	 */
	"@page.botmar": v.optional(v.string()),
	/**
	 * Specifies the height of the page; may be expressed in real-world units or staff steps.
	 */
	"@page.height": v.optional(v.string()),
	/**
	 * Indicates the amount of whitespace at the left side of a page.
	 */
	"@page.leftmar": v.optional(v.string()),
	/**
	 * Indicates the number of logical pages to be rendered on a single physical page.
	 */
	"@page.panels": v.optional(v.string()),
	/**
	 * Indicates the amount of whitespace at the right side of a page.
	 */
	"@page.rightmar": v.optional(v.string()),
	/**
	 * Indicates how the page should be scaled when rendered.
	 */
	"@page.scale": v.optional(v.string()),
	/**
	 * Indicates the amount of whitespace at the top of a page.
	 */
	"@page.topmar": v.optional(v.string()),
	/**
	 * Describes the width of the page; may be expressed in real-world units or staff steps.
	 */
	"@page.width": v.optional(v.string()),
});

export type AttrPagesData = v.InferOutput<typeof AttrPagesSchema>;
