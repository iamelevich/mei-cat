import * as v from "valibot";

/**
 * Used by layerDef, staffDef, and scoreDef to provide default values for attributes in the logical domain related to beaming..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.beaming.log.html
 */
export const AttrBeamingLogSchema = v.object({
	// Direct attributes
	/**
	 * Provides an example of how automated beaming (including secondary beams) is to be performed.
	 */
	"@beam.group": v.optional(v.string()),
	/**
	 * Indicates whether automatically-drawn beams should include rests shorter than a quarter note duration.
	 */
	"@beam.rests": v.optional(v.string()),
});

export type AttrBeamingLogData = v.InferOutput<typeof AttrBeamingLogSchema>;
