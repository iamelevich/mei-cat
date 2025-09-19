import * as v from "valibot";

/**
 * Attributes that locate a sound source within 3-D space..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.soundLocation.html
 */
export const AttrSoundLocationSchema = v.object({
	// Direct attributes
	/**
	 * The lateral or left-to-right plane.
	 */
	"@azimuth": v.optional(v.string()),
	/**
	 * The above-to-below axis.
	 */
	"@elevation": v.optional(v.string()),
});

export type AttrSoundLocationData = v.InferOutput<
	typeof AttrSoundLocationSchema
>;
