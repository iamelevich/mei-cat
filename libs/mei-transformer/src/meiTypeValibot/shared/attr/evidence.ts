import * as v from "valibot";

/**
 * Attributes that provide evidence information.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.evidence.html
 */
export const AttrEvidenceSchema = v.object({
	/**
	 * Indicates the nature of the evidence supporting the reliability or accuracy of the intervention or interpretation.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.evidence.html#evidence
	 */
	"@evidence": v.optional(v.string()),
});

export type AttrEvidenceData = v.InferOutput<typeof AttrEvidenceSchema>;
