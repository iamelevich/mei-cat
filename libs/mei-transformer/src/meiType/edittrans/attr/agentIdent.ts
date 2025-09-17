import { Type } from "typebox";

/**
 * Attributes that identify the agent responsible for some aspect of the text's creation, revision, or encoding.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.agentIdent.html
 */
export const AttrAgentIdentSchema = Type.Object(
	{
		/**
		 * Signifies the causative agent of damage, illegibility, or other loss of original text.
		 * Value is plain text.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.agentIdent.html#agent
		 */
		"@agent": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);
