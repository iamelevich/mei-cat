import * as v from "valibot";

/**
 * Attributes that describe duration as a ratio..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.duration.ratio.html
 */
export const AttrDurationRatioSchema = v.object({
	// Direct attributes
	/**
	 * Along with numbase, describes duration as a ratio. num is the first value in the ratio, while numbase is the second.
	 */
	"@num": v.optional(v.string()),
	/**
	 * Along with num, describes duration as a ratio. num is the first value in the ratio, while numbase is the second.
	 */
	"@numbase": v.optional(v.string()),
});

export type AttrDurationRatioData = v.InferOutput<
	typeof AttrDurationRatioSchema
>;
