import * as v from "valibot";

/**
 * Attributes listing the active participants in a user-defined collection..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.plist.html
 */
export const AttrPlistSchema = v.object({
	// Direct attributes
	/**
	 * When the target attribute is present, plist identifies the active participants; that is, those entities pointed "from", in a relationship with the specified target(s). When the target attribute is not present, it identifies participants in a mutual relationship.
	 */
	"@plist": v.optional(v.string()),
});

export type AttrPlistData = v.InferOutput<typeof AttrPlistSchema>;
