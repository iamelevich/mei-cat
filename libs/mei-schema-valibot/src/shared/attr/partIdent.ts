import * as v from "valibot";

/**
 * Attributes for identifying the part in which the current feature appears..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.partIdent.html
 */
export const AttrPartIdentSchema = v.object({
	// Direct attributes
	/**
	 * Indicates the part in which the current feature should appear. Use '%all' when the feature should occur in every part.
	 */
	"@part": v.optional(v.string()),
	/**
	 * Signifies the part staff on which a notated feature occurs. Use '%all' when the feature should occur on every staff.
	 */
	"@partstaff": v.optional(v.string()),
});

export type AttrPartIdentData = v.InferOutput<typeof AttrPartIdentSchema>;
