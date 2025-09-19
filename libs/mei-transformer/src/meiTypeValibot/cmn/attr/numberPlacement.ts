import * as v from "valibot";

/**
 * Attributes that record the placement and visibility of numbers that accompany a bowed tremolo or tuplet..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.numberPlacement.html
 */
export const AttrNumberPlacementSchema = v.object({
	// Direct attributes
	/**
	 * States where the tuplet number will be placed in relation to the note heads.
	 */
	"@num.place": v.optional(v.string()),
	/**
	 * Determines if the tuplet number is visible.
	 */
	"@num.visible": v.optional(v.string()),
});

export type AttrNumberPlacementData = v.InferOutput<
	typeof AttrNumberPlacementSchema
>;
