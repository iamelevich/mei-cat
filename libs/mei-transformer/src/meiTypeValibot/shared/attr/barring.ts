import * as v from "valibot";

/**
 * Attributes that capture the placement of bar lines..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.barring.html
 */
export const AttrBarringSchema = v.object({
	// Direct attributes
	/**
	 * States the length of bar lines in virtual units. The value must be greater than 0 and is typically equal to 2 times (the number of staff lines - 1); <abbr>e.g.</abbr>, a value of <val>8</val> for a 5-line staff.
	 */
	"@bar.len": v.optional(v.string()),
	/**
	 * Records the method of barring.
	 */
	"@bar.method": v.optional(v.string()),
	/**
	 * Denotes the staff location of bar lines, if the length is non-standard; that is, not equal to 2 times (the number of staff lines - 1).
	 */
	"@bar.place": v.optional(v.string()),
});

export type AttrBarringData = v.InferOutput<typeof AttrBarringSchema>;
