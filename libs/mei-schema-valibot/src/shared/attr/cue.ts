import * as v from "valibot";

/**
 * Attributes that describe "cue-ness"..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.cue.html
 */
export const AttrCueSchema = v.object({
	// Direct attributes
	/**
	 *
	 */
	"@cue": v.optional(v.string()),
});

export type AttrCueData = v.InferOutput<typeof AttrCueSchema>;
