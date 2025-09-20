import * as v from "valibot";

/**
 * Attributes that record numbers to be displayed with a feature..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.numbered.html
 */
export const AttrNumberedSchema = v.object({
	// Direct attributes
	/**
	 * Records a number or count accompanying a notational feature.
	 */
	"@num": v.optional(v.string()),
});

export type AttrNumberedData = v.InferOutput<typeof AttrNumberedSchema>;
