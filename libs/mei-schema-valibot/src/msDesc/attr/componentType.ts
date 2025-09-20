import * as v from "valibot";

/**
 * Attributes that express the relationship between a component and its host..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.componentType.html
 */
export const AttrComponentTypeSchema = v.object({
	// Direct attributes
	/**
	 * A physical and logical part of entity.
	 */
	"@comptype": v.optional(v.string()),
});

export type AttrComponentTypeData = v.InferOutput<
	typeof AttrComponentTypeSchema
>;
