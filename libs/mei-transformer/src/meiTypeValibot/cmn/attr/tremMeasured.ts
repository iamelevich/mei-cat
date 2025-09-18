import * as v from "valibot";

/**
 * Attributes for tremMeasured.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tremMeasured.html
 */
export const AttrTremMeasuredSchema = v.object({
	// TODO: Add tremMeasured attributes
});

export type AttrTremMeasuredData = v.InferOutput<typeof AttrTremMeasuredSchema>;
