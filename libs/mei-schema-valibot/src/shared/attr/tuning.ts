import * as v from "valibot";

/**
 * Attributes that describe tuning..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.tuning.html
 */
export const AttrTuningSchema = v.object({
	// Direct attributes
	/**
	 * Holds a value for cycles per second, <abbr>i.e.</abbr>, Hertz, for a tuning reference pitch.
	 */
	"@tune.Hz": v.optional(v.string()),
	/**
	 * Holds the pitch name of a tuning reference pitch, <abbr>i.e.</abbr>, the central tone of a tuning system.
	 */
	"@tune.pname": v.optional(v.string()),
	/**
	 * Provides an indication of the tuning system, <val>just</val>, for example.
	 */
	"@tune.temper": v.optional(v.string()),
});

export type AttrTuningData = v.InferOutput<typeof AttrTuningSchema>;
