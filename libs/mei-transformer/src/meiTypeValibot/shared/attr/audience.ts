import * as v from "valibot";

/**
 * Attributes that describe the intended audience..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.audience.html
 */
export const AttrAudienceSchema = v.object({
	// Direct attributes
	/**
	 * The intended audience.
	 */
	"@audience": v.optional(v.string()),
});

export type AttrAudienceData = v.InferOutput<typeof AttrAudienceSchema>;
