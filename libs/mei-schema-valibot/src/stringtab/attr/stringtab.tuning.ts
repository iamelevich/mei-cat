import * as v from "valibot";

/**
 * This collection of attributes is deprecated in favor of the new <gi scheme="MEI">tuning</gi> element and will be removed in a future version. String tablature tuning information..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stringtab.tuning.html
 */
export const AttrStringtabTuningSchema = v.object({
	// Direct attributes
	/**
	 * This attribute is deprecated in favor of the new <gi scheme="MEI">tuning</gi> element and will be removed in a future version. Provides a *written* pitch and octave for each open string or course of strings.
	 */
	"@tab.courses": v.optional(v.string()),
	/**
	 * This attribute is deprecated in favor of the new <gi scheme="MEI">tuning</gi> element and will be removed in a future version. Provides a *written* pitch and octave for each open string or course of strings.
	 */
	"@tab.strings": v.optional(v.string()),
});

export type AttrStringtabTuningData = v.InferOutput<
	typeof AttrStringtabTuningSchema
>;
