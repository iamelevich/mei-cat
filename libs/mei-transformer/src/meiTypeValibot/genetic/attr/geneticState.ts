import * as v from "valibot";

/**
 * Attributes that pertain to a genetic state..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.geneticState.html
 */
export const AttrGeneticStateSchema = v.object({
	// Direct attributes
	/**
	 * The @instant attribute is syntactic sugar for classifying a scribal intervention as an ad-hoc modification; that is, one which does not interrupt the writing process.
	 */
	"@instant": v.optional(v.string()),
	/**
	 * Points to the genetic state that results from this modification.
	 */
	"@state": v.optional(v.string()),
});

export type AttrGeneticStateData = v.InferOutput<typeof AttrGeneticStateSchema>;
