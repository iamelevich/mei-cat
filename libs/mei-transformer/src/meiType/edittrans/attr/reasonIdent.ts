import { type Static, Type } from "@sinclair/typebox";

/**
 * Attributes that identify the reason for missing textual material, why material is supplied, or why transcription is difficult.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.reasonIdent.html
 */
export const AttrReasonIdentSchema = Type.Object(
	{
		/**
		 * Holds a short phrase describing the reason for missing textual material (gap), why material is supplied (supplied), or why transcription is difficult (unclear).
		 * Value is plain text.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.reasonIdent.html#reason
		 */
		"@reason": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

export type AttrReasonIdent = Static<typeof AttrReasonIdentSchema>;
