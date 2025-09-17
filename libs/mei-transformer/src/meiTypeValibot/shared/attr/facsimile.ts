import * as v from "valibot";

/**
 * Attributes that provide facsimile information.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.facsimile.html
 */
export const AttrFacsimileSchema = v.object({
	/**
	 * Points to one or more images in a facsimile document or surface.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.facsimile.html#facs
	 */
	"@facs": v.optional(v.string()),
});

export type AttrFacsimileData = v.InferOutput<typeof AttrFacsimileSchema>;
