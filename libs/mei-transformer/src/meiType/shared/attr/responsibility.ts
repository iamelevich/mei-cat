import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";

/**
 * Attributes capturing information regarding responsibility for some aspect of the text's creation, transcription, editing, or encoding.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.responsibility.html
 */
export const AttrResponsibilitySchema = Type.Object(
	{
		/**
		 * Indicates the agent(s) responsible for some aspect of the text's transcription, editing, or encoding.
		 * Its value must point to one or more identifiers declared in the document header.
		 * One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.responsibility.html
		 * @see https://music-encoding.org/guidelines/v5/data-types/data.URI.html
		 */
		"@resp": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

/**
 * Attributes capturing information regarding responsibility for some aspect of the text's creation, transcription, editing, or encoding.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.responsibility.html
 */
export type AttrResponsibility = Static<typeof AttrResponsibilitySchema>;
