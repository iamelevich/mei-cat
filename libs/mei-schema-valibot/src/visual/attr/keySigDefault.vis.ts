import * as v from "valibot";

/**
 * Used by staffDef and scoreDef to provide default values for attributes in the visual domain related to key signatures..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.keySigDefault.vis.html
 */
export const AttrKeySigDefaultVisSchema = v.object({
	// Direct attributes
	/**
	 * Determines where cautionary accidentals should be displayed at a key change.
	 */
	"@keysig.cancelaccid": v.optional(v.string()),
	/**
	 * Determines whether the key signature is to be displayed.
	 */
	"@keysig.visible": v.optional(v.string()),
});

export type AttrKeySigDefaultVisData = v.InferOutput<
	typeof AttrKeySigDefaultVisSchema
>;
