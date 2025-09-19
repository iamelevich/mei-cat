import * as v from "valibot";

/**
 * Attributes describing whether a feature should be displayed..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.visibility.html
 */
export const AttrVisibilitySchema = v.object({
	// Direct attributes
	/**
	 * Indicates if a feature should be rendered when the notation is presented graphically or sounded when it is presented in an aural form.
	 */
	"@visible": v.optional(v.string()),
});

export type AttrVisibilityData = v.InferOutput<typeof AttrVisibilitySchema>;
