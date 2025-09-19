import * as v from "valibot";

/**
 * Attributes that describe distance from the staff..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.distances.html
 */
export const AttrDistancesSchema = v.object({
	// Direct attributes
	/**
	 * Records the default distance from the staff for directives.
	 */
	"@dir.dist": v.optional(v.string()),
	/**
	 * Records the default distance from the staff for dynamic marks.
	 */
	"@dynam.dist": v.optional(v.string()),
	/**
	 * Records the default distance from the staff of harmonic indications, such as guitar chord grids or functional labels.
	 */
	"@harm.dist": v.optional(v.string()),
	/**
	 * Records the default distance from the staff for rehearsal marks.
	 */
	"@reh.dist": v.optional(v.string()),
	/**
	 * Records the default distance from the staff for tempo marks.
	 */
	"@tempo.dist": v.optional(v.string()),
});

export type AttrDistancesData = v.InferOutput<typeof AttrDistancesSchema>;
