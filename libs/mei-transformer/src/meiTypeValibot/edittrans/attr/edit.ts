import * as v from "valibot";

/**
 * Attributes that capture information about the nature of an encoded scholarly intervention or interpretation of any aspect of an item.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.edit.html
 */
export const AttrEditSchema = v.object({
	/**
	 * Signifies the degree of certainty or precision associated with a feature.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.edit.html#cert
	 */
	"@cert": v.optional(v.string()),
	/**
	 * Indicates the nature of the evidence supporting the reliability or accuracy of the intervention or interpretation.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.edit.html#evidence
	 */
	"@evidence": v.optional(v.string()),
	/**
	 * Contains a list of one or more pointers indicating the sources which attest to a given reading.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.edit.html#source
	 */
	"@source": v.optional(v.string()),
});

export type AttrEditData = v.InferOutput<typeof AttrEditSchema>;
