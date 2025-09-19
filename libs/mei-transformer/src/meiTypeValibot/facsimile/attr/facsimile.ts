import * as v from "valibot";

/**
 * Attributes that associate a feature corresponding with all or part of an image..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.facsimile.html
 */
export const AttrFacsimileSchema = v.object({
	// Direct attributes
	/**
	 * Points to one or more images, portions of an image, or surfaces which correspond to the current element.
	 */
	"@facs": v.optional(v.string()),
});

export type AttrFacsimileData = v.InferOutput<typeof AttrFacsimileSchema>;
