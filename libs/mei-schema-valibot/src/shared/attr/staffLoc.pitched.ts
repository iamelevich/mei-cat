import * as v from "valibot";

/**
 * Attributes that identify location on a staff in terms of pitch and octave..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffLoc.pitched.html
 */
export const AttrStaffLocPitchedSchema = v.object({
	// Direct attributes
	/**
	 * Records staff location in terms of written octave.
	 */
	"@oloc": v.optional(v.string()),
	/**
	 * Captures staff location in terms of written pitch name.
	 */
	"@ploc": v.optional(v.string()),
});

export type AttrStaffLocPitchedData = v.InferOutput<
	typeof AttrStaffLocPitchedSchema
>;
