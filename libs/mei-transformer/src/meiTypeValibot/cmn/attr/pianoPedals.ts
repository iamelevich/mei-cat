import * as v from "valibot";

/**
 * Attributes for pianoPedals.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pianoPedals.html
 */
export const AttrPianoPedalsSchema = v.object({
	// TODO: Add pianoPedals attributes
});

export type AttrPianoPedalsData = v.InferOutput<typeof AttrPianoPedalsSchema>;
