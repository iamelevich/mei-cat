import * as v from "valibot";

/**
 * Attributes for numberPlacement.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.numberPlacement.html
 */
export const AttrNumberPlacementSchema = v.object({
	// TODO: Add numberPlacement attributes
});

export type AttrNumberPlacementData = v.InferOutput<
	typeof AttrNumberPlacementSchema
>;
