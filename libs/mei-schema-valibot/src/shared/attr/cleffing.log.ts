import * as v from "valibot";

/**
 * Used by staffDef and scoreDef to provide default values for attributes in the logical domain related to clefs..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.cleffing.log.html
 */
export const AttrCleffingLogSchema = v.object({
	// Direct attributes
	/**
	 * Records the amount of octave displacement to be applied to the clef.
	 */
	"@clef.dis": v.optional(v.string()),
	/**
	 * Records the direction of octave displacement to be applied to the clef.
	 */
	"@clef.dis.place": v.optional(v.string()),
	/**
	 * Contains a default value for the position of the clef. The value must be in the range between 1 and the number of lines on the staff. The numbering of lines starts with the lowest line of the staff.
	 */
	"@clef.line": v.optional(v.string()),
	/**
	 * Encodes a value for the clef symbol.
	 */
	"@clef.shape": v.optional(v.string()),
});

export type AttrCleffingLogData = v.InferOutput<typeof AttrCleffingLogSchema>;
