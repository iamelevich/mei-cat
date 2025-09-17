import { Type } from "typebox";

/**
 * Attributes used to supply a label for an element.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.labelled.html
 */
export const AttrLabelledSchema = Type.Object(
	{
		/**
		 * Captures text to be used to generate a label for the element to which it's attached, a "tool tip" or prefatory text, for example.
		 * Should not be used to record document content. Value is plain text.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.labelled.html
		 */
		"@label": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);
