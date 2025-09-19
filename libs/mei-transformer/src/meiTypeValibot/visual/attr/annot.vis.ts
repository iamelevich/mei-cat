import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.annot.vis.html
 */
export const AttrAnnotVisSchema = v.object({
	// Direct attributes
	/**
	 * Location of the annotation.
	 */
	"@place": v.optional(v.string()),
});

export type AttrAnnotVisData = v.InferOutput<typeof AttrAnnotVisSchema>;
