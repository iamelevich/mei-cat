import * as v from "valibot";

/**
 * Attributes that identify the reason for missing textual material, why material is supplied, or why transcription is difficult.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.reasonIdent.html
 */
export const AttrReasonIdentSchema = v.object({
	/**
	 * Holds a short phrase describing the reason for missing textual material (gap), why material is supplied (supplied), or why transcription is difficult (unclear).
	 * Value is plain text.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.reasonIdent.html#reason
	 */
	"@reason": v.optional(v.string()),
});

export type AttrReasonIdentData = v.InferOutput<typeof AttrReasonIdentSchema>;
