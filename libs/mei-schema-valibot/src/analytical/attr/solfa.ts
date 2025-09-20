import * as v from "valibot";

/**
 * Attributes that specify pitch using sol-fa..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.solfa.html
 */
export const AttrSolfaSchema = v.object({
	// Direct attributes
	/**
	 * Contains sol-fa designation, <abbr>e.g.</abbr>, do, re, mi, etc., in either a fixed or movable Do system.
	 */
	"@psolfa": v.optional(v.string()),
});

export type AttrSolfaData = v.InferOutput<typeof AttrSolfaSchema>;
