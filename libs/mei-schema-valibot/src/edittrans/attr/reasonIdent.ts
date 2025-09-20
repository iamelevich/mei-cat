import * as v from "valibot";

/**
 * Attributes that identify the reason why an editorial feature is used..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.reasonIdent.html
 */
export const AttrReasonIdentSchema = v.object({
	// Direct attributes
	/**
	 * Holds a short phrase describing the reason for missing textual material (gap), why material is supplied (supplied), or why transcription is difficult (unclear).
	 */
	"@reason": v.optional(v.string()),
});

export type AttrReasonIdentData = v.InferOutput<typeof AttrReasonIdentSchema>;
