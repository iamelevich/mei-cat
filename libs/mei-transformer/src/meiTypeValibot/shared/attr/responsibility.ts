import * as v from "valibot";

/**
 * Attributes capturing information regarding responsibility for some aspect of the text's creation, transcription, editing, or encoding..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.responsibility.html
 */
export const AttrResponsibilitySchema = v.object({
	// Direct attributes
	/**
	 * Indicates the agent(s) responsible for some aspect of the text’s transcription, editing, or encoding. Its value must point to one or more identifiers declared in the document header.
	 */
	"@resp": v.optional(v.string()),
});

export type AttrResponsibilityData = v.InferOutput<
	typeof AttrResponsibilitySchema
>;
