import * as v from "valibot";

/**
 * Attributes that describe the symbol used to group volta elements..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.voltaGroupingSym.html
 */
export const AttrVoltaGroupingSymSchema = v.object({
	// Direct attributes
	/**
	 * Specifies the symbol used to group lyrics.
	 */
	"@voltasym": v.optional(v.string()),
});

export type AttrVoltaGroupingSymData = v.InferOutput<
	typeof AttrVoltaGroupingSymSchema
>;
