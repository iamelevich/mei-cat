import * as v from "valibot";

/**
 * Attributes that capture notation spacing information..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.spacing.html
 */
export const AttrSpacingSchema = v.object({
	// Direct attributes
	/**
	 * Describes a note’s spacing relative to its time value.
	 */
	"@spacing.packexp": v.optional(v.string()),
	/**
	 * Describes the note spacing of output.
	 */
	"@spacing.packfact": v.optional(v.string()),
	/**
	 * Specifies the minimum amount of space between adjacent staves in the same system; measured from the bottom line of the staff above to the top line of the staff below.
	 */
	"@spacing.staff": v.optional(v.string()),
	/**
	 * Describes the space between adjacent systems; a pair of space-separated values (minimum and maximum, respectively) provides a range between which a rendering system-supplied value may fall, while a single value indicates a fixed amount of space; that is, the minimum and maximum values are equal.
	 */
	"@spacing.system": v.optional(v.string()),
});

export type AttrSpacingData = v.InferOutput<typeof AttrSpacingSchema>;
