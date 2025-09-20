import * as v from "valibot";

/**
 * Attributes that indicate whether an event lies under a beam..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamPresent.html
 */
export const AttrBeamPresentSchema = v.object({
	// Direct attributes
	/**
	 * Indicates that this event is "under a beam".
	 */
	"@beam": v.optional(v.string()),
});

export type AttrBeamPresentData = v.InferOutput<typeof AttrBeamPresentSchema>;
