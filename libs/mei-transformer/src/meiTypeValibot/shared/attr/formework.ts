import * as v from "valibot";

/**
 * Attributes that record the function (i.e., placement) of forme work elements..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.formework.html
 */
export const AttrFormeworkSchema = v.object({
	// Direct attributes
	/**
	 * Records the function (i.e., placement) of a page header or footer.
	 */
	"@func": v.optional(v.string()),
});

export type AttrFormeworkData = v.InferOutput<typeof AttrFormeworkSchema>;
