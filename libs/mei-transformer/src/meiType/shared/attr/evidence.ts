import { type Static, Type } from "@sinclair/typebox";

/**
 * Evidence attributes for supporting reliability or accuracy of interventions.
 * @see https://music-encoding.org/guidelines/v5/elements/cutout.html#evidence
 */
export const AttrEvidenceSchema = Type.Object({
	/**
	 * Signifies the degree of certainty or precision associated with a feature.
	 * @see https://music-encoding.org/guidelines/v5/elements/cutout.html#cert
	 */
	cert: Type.Optional(Type.String()),
	/**
	 * Indicates the nature of the evidence supporting the reliability or accuracy of the intervention or interpretation.
	 * @see https://music-encoding.org/guidelines/v5/elements/cutout.html#evidence
	 */
	evidence: Type.Optional(
		Type.Union([
			Type.Literal("internal"),
			Type.Literal("external"),
			Type.Literal("conjecture"),
		]),
	),
});

export type AttrEvidence = Static<typeof AttrEvidenceSchema>;
