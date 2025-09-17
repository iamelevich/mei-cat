import * as v from "valibot";

/**
 * Attributes that indicate the authority or source for the element's content.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.authorized.html
 */
export const AttrAuthorizedSchema = v.object({
	/**
	 * Indicates the authority or source for the element's content.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.authorized.html#authority
	 */
	"@authority": v.optional(v.string()),
});

export type AttrAuthorizedData = v.InferOutput<typeof AttrAuthorizedSchema>;
