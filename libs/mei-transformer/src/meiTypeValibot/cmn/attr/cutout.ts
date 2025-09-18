import * as v from "valibot";

/**
 * Attributes for cutout.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.cutout.html
 */
export const AttrCutoutSchema = v.object({
	// TODO: Add cutout attributes
});

export type AttrCutoutData = v.InferOutput<typeof AttrCutoutSchema>;
