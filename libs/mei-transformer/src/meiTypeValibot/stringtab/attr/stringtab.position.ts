import * as v from "valibot";

/**
 * String tablature position information..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stringtab.position.html
 */
export const AttrStringtabPositionSchema = v.object({
	// Direct attributes
	/**
	 * Records fret position.
	 */
	"@tab.pos": v.optional(v.string()),
});

export type AttrStringtabPositionData = v.InferOutput<
	typeof AttrStringtabPositionSchema
>;
