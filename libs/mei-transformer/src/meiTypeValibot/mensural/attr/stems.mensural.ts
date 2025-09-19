import * as v from "valibot";

/**
 * Attributes that describe the properties of stemmed features specific to mensural repertoires..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stems.mensural.html
 */
export const AttrStemsMensuralSchema = v.object({
	// Direct attributes
	/**
	 * Records the form of the stem.
	 */
	"@stem.form": v.optional(v.string()),
});

export type AttrStemsMensuralData = v.InferOutput<
	typeof AttrStemsMensuralSchema
>;
