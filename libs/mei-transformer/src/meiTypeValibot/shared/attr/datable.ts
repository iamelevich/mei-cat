import * as v from "valibot";

/**
 * Attributes that provide date information.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.datable.html
 */
export const AttrDatableSchema = v.object({
	/**
	 * Specifies the standard or normalized form of a date according to ISO 8601.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.datable.html#isodate
	 */
	"@isodate": v.optional(v.string()),

	/**
	 * Indicates the certainty of the date.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.datable.html#notafter
	 */
	"@notafter": v.optional(v.string()),

	/**
	 * Indicates the certainty of the date.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.datable.html#notbefore
	 */
	"@notbefore": v.optional(v.string()),
});

export type AttrDatableData = v.InferOutput<typeof AttrDatableSchema>;
