import * as v from "valibot";

/**
 * Provides attributes for elements which may be associated with particular contextual elements within the header..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.metadataPointing.html
 */
export const AttrMetadataPointingSchema = v.object({
	// Direct attributes
	/**
	 * Identifies one or more metadata elements (other than classification terms) within the header, which are understood to apply to the element bearing this attribute and its content.
	 */
	"@decls": v.optional(v.string()),
});

export type AttrMetadataPointingData = v.InferOutput<
	typeof AttrMetadataPointingSchema
>;
