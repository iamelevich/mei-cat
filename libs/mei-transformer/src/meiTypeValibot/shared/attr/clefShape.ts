import * as v from "valibot";

/**
 * Attributes that record the shape of a clef..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.clefShape.html
 */
export const AttrClefShapeSchema = v.object({
	// Direct attributes
	/**
	 * Describes a clef’s shape.
	 */
	"@shape": v.optional(v.string()),
});

export type AttrClefShapeData = v.InferOutput<typeof AttrClefShapeSchema>;
