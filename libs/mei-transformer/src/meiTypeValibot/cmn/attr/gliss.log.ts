import * as v from "valibot";

/**
 * Attributes for gliss.log.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.gliss.log.html
 */
export const AttrGlissLogSchema = v.object({
	// TODO: Add gliss.log attributes
});

export type AttrGlissLogData = v.InferOutput<typeof AttrGlissLogSchema>;
