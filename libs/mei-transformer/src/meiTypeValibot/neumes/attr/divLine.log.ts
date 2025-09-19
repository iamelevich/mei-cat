import * as v from "valibot";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.divLine.log.html
 */
export const AttrDivLineLogSchema = v.object({
	// Direct attributes
	/**
	 * Identifies the different kinds of division.
	 */
	"@form": v.optional(v.string()),
});

export type AttrDivLineLogData = v.InferOutput<typeof AttrDivLineLogSchema>;
