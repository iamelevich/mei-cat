import * as v from "valibot";

/**
 * Visual domain attributes that describe the properties of a plica stem in the mensural repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.plica.vis.html
 */
export const AttrPlicaVisSchema = v.object({
	// Direct attributes
	/**
	 * Describes the direction of a stem.
	 */
	"@dir": v.optional(v.string()),
	/**
	 * Encodes the stem length.
	 */
	"@len": v.optional(v.string()),
});

export type AttrPlicaVisData = v.InferOutput<typeof AttrPlicaVisSchema>;
