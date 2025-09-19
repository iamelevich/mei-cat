import * as v from "valibot";

/**
 * Attributes describing the support for and the certainty of an assertion..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.evidence.html
 */
export const AttrEvidenceSchema = v.object({
	// Direct attributes
	/**
	 * Signifies the degree of certainty or precision associated with a feature.
	 */
	"@cert": v.optional(v.string()),
	/**
	 * Indicates the nature of the evidence supporting the reliability or accuracy of the intervention or interpretation.
	 */
	"@evidence": v.optional(v.string()),
});

export type AttrEvidenceData = v.InferOutput<typeof AttrEvidenceSchema>;
