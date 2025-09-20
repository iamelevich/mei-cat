import * as v from "valibot";

/**
 * Attributes that establish the boundaries of a media object..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mediaBounds.html
 */
export const AttrMediaBoundsSchema = v.object({
	// Direct attributes
	/**
	 * Specifies a point where the relevant content begins. A numerical value must be less and a time value must be earlier than that given by the end attribute.
	 */
	"@begin": v.optional(v.string()),
	/**
	 * Type of values used in the begin/end attributes. The begin and end attributes can only be interpreted meaningfully in conjunction with this attribute.
	 */
	"@betype": v.optional(v.string()),
	/**
	 * Specifies a point where the relevant content ends. If not specified, the end of the content is assumed to be the end point. A numerical value must be greater and a time value must be later than that given by the begin attribute.
	 */
	"@end": v.optional(v.string()),
});

export type AttrMediaBoundsData = v.InferOutput<typeof AttrMediaBoundsSchema>;
