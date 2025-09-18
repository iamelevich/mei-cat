import * as v from "valibot";

/**
 * Attributes for slurRend.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.slurRend.html
 */
export const AttrSlurRendSchema = v.object({
	// TODO: Add slurRend attributes
});

export type AttrSlurRendData = v.InferOutput<typeof AttrSlurRendSchema>;
