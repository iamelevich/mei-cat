import * as v from "valibot";

/**
 * Attributes indicating cross-staff beaming.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamedWith.html
 */
export const AttrBeamedWithSchema = v.object({
	/**
	 * In the case of cross-staff beams, the beam.with attribute is used to indicate which staff the beam is connected to; that is, the staff above or the staff below.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beamedWith.html#beam.with
	 */
	"@beam.with": v.optional(v.string()),
});

export type AttrBeamedWithData = v.InferOutput<typeof AttrBeamedWithSchema>;
