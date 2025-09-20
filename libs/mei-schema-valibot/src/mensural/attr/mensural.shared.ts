import * as v from "valibot";

/**
 * Shared attributes in the mensural repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensural.shared.html
 */
export const AttrMensuralSharedSchema = v.object({
	// Direct attributes
	/**
	 * Describes the divisions of the breve in use in 14th-century Italy.
	 */
	"@divisio": v.optional(v.string()),
	/**
	 * Describes the maxima-long relationship.
	 */
	"@modusmaior": v.optional(v.string()),
	/**
	 * Describes the long-breve relationship.
	 */
	"@modusminor": v.optional(v.string()),
	/**
	 * Describes the semibreve-minim relationship.
	 */
	"@prolatio": v.optional(v.string()),
	/**
	 * Describes the breve-semibreve relationship.
	 */
	"@tempus": v.optional(v.string()),
});

export type AttrMensuralSharedData = v.InferOutput<
	typeof AttrMensuralSharedSchema
>;
