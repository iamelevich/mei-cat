import * as v from "valibot";

/**
 * Attributes that provide a durational default value..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.duration.default.html
 */
export const AttrDurationDefaultSchema = v.object({
	// Direct attributes
	/**
	 * Contains a default duration in those situations when the first note, rest, chord, etc. in a measure does not have a duration specified.
	 */
	"@dur.default": v.optional(v.string()),
	/**
	 * Along with numbase.default, describes the default duration as a ratio. num.default is the first value in the ratio.
	 */
	"@num.default": v.optional(v.string()),
	/**
	 * Along with num.default, describes the default duration as a ratio. numbase.default is the second value in the ratio.
	 */
	"@numbase.default": v.optional(v.string()),
});

export type AttrDurationDefaultData = v.InferOutput<
	typeof AttrDurationDefaultSchema
>;
