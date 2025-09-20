import * as v from "valibot";

/**
 * Horizontal offset attributes specified in terms of time..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visualOffset.to.html
 */
export const AttrVisualOffsetToSchema = v.object({
	// Direct attributes
	/**
	 * Records a timestamp adjustment of a feature’s programmatically-determined location in terms of musical time; that is, beats.
	 */
	"@to": v.optional(v.string()),
});

export type AttrVisualOffsetToData = v.InferOutput<
	typeof AttrVisualOffsetToSchema
>;
