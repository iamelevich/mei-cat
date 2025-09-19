import * as v from "valibot";

/**
 * Attributes pertaining to the notehead part of a note..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.noteHeads.html
 */
export const AttrNoteHeadsSchema = v.object({
	// Direct attributes
	/**
	 * Provides a way of pointing to a user-defined symbol. It must contain a reference to an ID of a <gi scheme="MEI">symbolDef</gi> element elsewhere in the document.
	 */
	"@head.altsym": v.optional(v.string()),
	/**
	 * A name or label associated with the controlled vocabulary from which a numerical value of <att>head.shape</att> is taken.
	 */
	"@head.auth": v.optional(v.string()),
	/**
	 * Captures the overall color of a notehead.
	 */
	"@head.color": v.optional(v.string()),
	/**
	 * Describes how/if the notehead is filled.
	 */
	"@head.fill": v.optional(v.string()),
	/**
	 * Captures the fill color of a notehead if different from the overall note color.
	 */
	"@head.fillcolor": v.optional(v.string()),
	/**
	 * Records any additional symbols applied to the notehead.
	 */
	"@head.mod": v.optional(v.string()),
	/**
	 * Describes rotation applied to the basic notehead shape. A positive value rotates the notehead in a counter-clockwise fashion, while negative values produce clockwise rotation.
	 */
	"@head.rotation": v.optional(v.string()),
	/**
	 * Used to override the head shape normally used for the given duration.
	 */
	"@head.shape": v.optional(v.string()),
	/**
	 * Indicates if a feature should be rendered when the notation is presented graphically or sounded when it is presented in an aural form.
	 */
	"@head.visible": v.optional(v.string()),
});

export type AttrNoteHeadsData = v.InferOutput<typeof AttrNoteHeadsSchema>;
