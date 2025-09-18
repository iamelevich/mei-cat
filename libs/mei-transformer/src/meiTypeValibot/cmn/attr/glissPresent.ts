import * as v from "valibot";

/**
 * Attributes for glissPresent.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.glissPresent.html
 */
export const AttrGlissPresentSchema = v.object({
	// TODO: Add glissPresent attributes
});

export type AttrGlissPresentData = v.InferOutput<typeof AttrGlissPresentSchema>;
