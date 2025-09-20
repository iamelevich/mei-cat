import * as v from "valibot";

/**
 * Used by scoreDef and staffDef to provide default description of piano pedal rendition..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pianoPedals.html
 */
export const AttrPianoPedalsSchema = v.object({
	// Direct attributes
	/**
	 * Determines whether piano pedal marks should be rendered as lines or as terms.
	 */
	"@pedal.style": v.optional(v.string()),
});

export type AttrPianoPedalsData = v.InferOutput<typeof AttrPianoPedalsSchema>;
