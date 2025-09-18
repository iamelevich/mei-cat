import * as v from "valibot";

/**
 * Attributes for expandable.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.expandable.html
 */
export const AttrExpandableSchema = v.object({
	// TODO: Add expandable attributes
});

export type AttrExpandableData = v.InferOutput<typeof AttrExpandableSchema>;
