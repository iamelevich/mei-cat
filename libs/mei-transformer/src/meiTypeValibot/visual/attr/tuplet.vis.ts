import * as v from "valibot";
import { AttrColorSchema } from "../../shared";
import { AttrNumberPlacementSchema } from "../../cmn";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tuplet.vis.html
 */
export const AttrTupletVisSchema = v.object({
	// Inherited attribute classes
	...AttrColorSchema.entries,
	...AttrNumberPlacementSchema.entries,

	// Direct attributes
	/**
	 * Used to state where a tuplet bracket will be placed in relation to the note heads.
	 */
	"@bracket.place": v.optional(v.string()),
	/**
	 * States whether a bracket should be rendered with a tuplet.
	 */
	"@bracket.visible": v.optional(v.string()),
	/**
	 * Determines if the tuplet duration is visible.
	 */
	"@dur.visible": v.optional(v.string()),
	/**
	 * Controls how the num:numbase ratio is to be displayed.
	 */
	"@num.format": v.optional(v.string()),
});

export type AttrTupletVisData = v.InferOutput<typeof AttrTupletVisSchema>;
