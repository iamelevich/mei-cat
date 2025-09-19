import * as v from "valibot";

/**
 * Attributes that identify the layer associated with a distant feature..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.origin.layerIdent.html
 */
export const AttrOriginLayerIdentSchema = v.object({
	// Direct attributes
	/**
	 * identifies the layer on which referenced notation occurs.
	 */
	"@origin.layer": v.optional(v.string()),
});

export type AttrOriginLayerIdentData = v.InferOutput<
	typeof AttrOriginLayerIdentSchema
>;
