import * as v from "valibot";

/**
 * Attributes for the identification of a causative agent..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.agentIdent.html
 */
export const AttrAgentIdentSchema = v.object({
	// Direct attributes
	/**
	 * Signifies the causative agent of damage, illegibility, or other loss of original text.
	 */
	"@agent": v.optional(v.string()),
});

export type AttrAgentIdentData = v.InferOutput<typeof AttrAgentIdentSchema>;
