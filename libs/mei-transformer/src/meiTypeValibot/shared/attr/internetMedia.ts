import * as v from "valibot";

/**
 * Attributes which record the type of an electronic resource..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.internetMedia.html
 */
export const AttrInternetMediaSchema = v.object({
	// Direct attributes
	/**
	 * Specifies the applicable MIME (multimedia internet mail extension) type. The value should be a valid MIME media type defined by the Internet Engineering Task Force in RFC 2046.
	 */
	"@mimetype": v.optional(v.string()),
});

export type AttrInternetMediaData = v.InferOutput<
	typeof AttrInternetMediaSchema
>;
