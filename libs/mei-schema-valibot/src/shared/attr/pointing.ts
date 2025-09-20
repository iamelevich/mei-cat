import * as v from "valibot";

/**
 * Attributes common to all pointing/linking elements..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pointing.html
 */
export const AttrPointingSchema = v.object({
	// Direct attributes
	/**
	 * Defines whether a link occurs automatically or must be requested by the user.
	 */
	"@actuate": v.optional(v.string()),
	/**
	 * Characterization of the relationship between resources. The value of the role attribute must be a URI.
	 */
	"@role": v.optional(v.string()),
	/**
	 * Defines how a remote resource is rendered.
	 */
	"@show": v.optional(v.string()),
	/**
	 * Identifies passive participants in a relationship; that is, the entities pointed "to".
	 */
	"@target": v.optional(v.string()),
	/**
	 * Characterization of target resource(s) using any convenient classification scheme or typology.
	 */
	"@targettype": v.optional(v.string()),
	/**
	 * Contains a human-readable description of the entire link.
	 */
	"@title": v.optional(v.string()),
});

export type AttrPointingData = v.InferOutput<typeof AttrPointingSchema>;
