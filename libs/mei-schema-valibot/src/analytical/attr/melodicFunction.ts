import * as v from "valibot";

/**
 * Attributes describing melodic function..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.melodicFunction.html
 */
export const AttrMelodicFunctionSchema = v.object({
	// Direct attributes
	/**
	 * Describes melodic function using <ref target="https://www.humdrum.org/rep/embel/">Humdrum **embel syntax</ref>.
	 */
	"@mfunc": v.optional(v.string()),
});

export type AttrMelodicFunctionData = v.InferOutput<
	typeof AttrMelodicFunctionSchema
>;
