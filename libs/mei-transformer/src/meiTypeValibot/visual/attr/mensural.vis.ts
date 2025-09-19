import * as v from "valibot";

/**
 * Used by staffDef and scoreDef to provide default values for attributes in the visual domain related to mensuration..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mensural.vis.html
 */
export const AttrMensuralVisSchema = v.object({
	// Direct attributes
	/**
	 * Records the color of the mensuration sign. Do not confuse this with the musical term 'color' as used in pre-CMN notation.
	 */
	"@mensur.color": v.optional(v.string()),
	/**
	 * Determines if a dot is to be added to the base symbol.
	 */
	"@mensur.dot": v.optional(v.string()),
	/**
	 * Indicates whether the base symbol is written vertically or horizontally.
	 */
	"@mensur.form": v.optional(v.string()),
	/**
	 * Holds the staff location of the mensuration sign.
	 */
	"@mensur.loc": v.optional(v.string()),
	/**
	 * Describes the rotation or reflection of the base symbol.
	 */
	"@mensur.orient": v.optional(v.string()),
	/**
	 * The base symbol in the mensuration sign/time signature of mensural notation.
	 */
	"@mensur.sign": v.optional(v.string()),
	/**
	 * Describes the relative size of the mensuration sign.
	 */
	"@mensur.size": v.optional(v.string()),
	/**
	 * Indicates the number lines added to the mensuration sign. For example, one slash is added for what we now call 'alla breve'.
	 */
	"@mensur.slash": v.optional(v.string()),
});

export type AttrMensuralVisData = v.InferOutput<typeof AttrMensuralVisSchema>;
