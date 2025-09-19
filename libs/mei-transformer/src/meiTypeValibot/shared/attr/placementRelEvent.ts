import * as v from "valibot";

/**
 * Attributes capturing placement information with respect to an event..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.placementRelEvent.html
 */
export const AttrPlacementRelEventSchema = v.object({
	// Direct attributes
	/**
	 * Captures the placement of the item with respect to the event with which it is associated.
	 */
	"@place": v.optional(v.string()),
});

export type AttrPlacementRelEventData = v.InferOutput<
	typeof AttrPlacementRelEventSchema
>;
