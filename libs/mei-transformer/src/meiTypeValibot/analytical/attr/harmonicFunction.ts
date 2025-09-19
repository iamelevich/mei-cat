import * as v from "valibot";

/**
 * Attributes describing the harmonic function of a single pitch..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harmonicFunction.html
 */
export const AttrHarmonicFunctionSchema = v.object({
	// Direct attributes
	/**
	 * Captures scale degree information using <ref target="https://www.humdrum.org/rep/deg/">Humdrum **deg syntax</ref> -- an optional indicator of melodic approach (^ = ascending approach, v = descending approach), a scale degree value (1 = tonic ... 7 = leading tone), and an optional indication of chromatic alteration, <val>1</val>, <val>v7</val>, <val>^1</val>, or <val>v5+</val>, for example. The amount of chromatic alternation is not indicated.
	 */
	"@deg": v.optional(v.string()),
});

export type AttrHarmonicFunctionData = v.InferOutput<
	typeof AttrHarmonicFunctionSchema
>;
