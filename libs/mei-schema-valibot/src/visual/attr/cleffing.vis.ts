import * as v from "valibot";

/**
 * Used by staffDef and scoreDef to provide default values for attributes in the visual domain related to clefs..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.cleffing.vis.html
 */
export const AttrCleffingVisSchema = v.object({
	// Direct attributes
	/**
	 * Describes the color of the clef.
	 */
	"@clef.color": v.optional(v.string()),
	/**
	 * Determines whether the clef is to be displayed.
	 */
	"@clef.visible": v.optional(v.string()),
});

export type AttrCleffingVisData = v.InferOutput<typeof AttrCleffingVisSchema>;
