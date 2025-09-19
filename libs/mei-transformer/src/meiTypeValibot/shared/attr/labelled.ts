import * as v from "valibot";

/**
 * Captures text to be used to generate a label for the element to which it’s attached, a "tool tip" or prefatory text, for example. Should not be used to record document content..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.labelled.html
 */
export const AttrLabelledSchema = v.object({
	// Direct attributes
	/**
	 * Captures text to be used to generate a label for the element to which it’s attached, a "tool tip" or prefatory text, for example. Should not be used to record document content.
	 */
	"@label": v.optional(v.string()),
});

export type AttrLabelledData = v.InferOutput<typeof AttrLabelledSchema>;
