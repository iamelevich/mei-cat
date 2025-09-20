import * as v from "valibot";

/**
 * Attributes that identify the layer to which a feature applies..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.layerIdent.html
 */
export const AttrLayerIdentSchema = v.object({
	// Direct attributes
	/**
	 * Identifies the layer to which a feature applies.
	 */
	"@layer": v.optional(v.string()),
});

export type AttrLayerIdentData = v.InferOutput<typeof AttrLayerIdentSchema>;
