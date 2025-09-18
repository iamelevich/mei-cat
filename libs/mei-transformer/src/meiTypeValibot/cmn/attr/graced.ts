import * as v from "valibot";

/**
 * Attributes for graced.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.graced.html
 */
export const AttrGracedSchema = v.object({
	// TODO: Add graced attributes
});

export type AttrGracedData = v.InferOutput<typeof AttrGracedSchema>;
