import * as v from "valibot";

/**
 * Attributes common to dates..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.datable.html
 */
export const AttrDatableSchema = v.object({
	// Direct attributes
	/**
	 * Contains the end point of a date range in standard ISO form.
	 */
	"@enddate": v.optional(v.string()),
	/**
	 * Provides the value of a textual date in standard ISO form.
	 */
	"@isodate": v.optional(v.string()),
	/**
	 * Contains an upper boundary for an uncertain date in standard ISO form.
	 */
	"@notafter": v.optional(v.string()),
	/**
	 * Contains a lower boundary, in standard ISO form, for an uncertain date.
	 */
	"@notbefore": v.optional(v.string()),
	/**
	 * Contains the starting point of a date range in standard ISO form.
	 */
	"@startdate": v.optional(v.string()),
});

export type AttrDatableData = v.InferOutput<typeof AttrDatableSchema>;
