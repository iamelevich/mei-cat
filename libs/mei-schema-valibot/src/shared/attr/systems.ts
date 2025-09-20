import * as v from "valibot";

/**
 * Attributes that capture system layout information..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.systems.html
 */
export const AttrSystemsSchema = v.object({
	// Direct attributes
	/**
	 * Indicates whether the system starts with a continuous line connecting all staves, including single-staff systems. Do not confuse this with the heavy vertical line used as a grouping symbol.
	 */
	"@system.leftline": v.optional(v.string()),
	/**
	 * Describes the amount of whitespace at the left system margin relative to page.leftmar.
	 */
	"@system.leftmar": v.optional(v.string()),
	/**
	 * Describes the amount of whitespace at the right system margin relative to page.rightmar.
	 */
	"@system.rightmar": v.optional(v.string()),
	/**
	 * Describes the distance from page’s top edge to the first system; used for first page only.
	 */
	"@system.topmar": v.optional(v.string()),
});

export type AttrSystemsData = v.InferOutput<typeof AttrSystemsSchema>;
