import * as v from "valibot";

/**
 * Attributes for crit.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.crit.html
 */
export const AttrCritSchema = v.object({
	// TODO: Add crit attributes
});

export type AttrCritData = v.InferOutput<typeof AttrCritSchema>;
