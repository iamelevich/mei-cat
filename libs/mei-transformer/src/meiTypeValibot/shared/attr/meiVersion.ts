import * as v from "valibot";

/**
 * Attributes that record the version of MEI in use..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.meiVersion.html
 */
export const AttrMeiVersionSchema = v.object({
	// Direct attributes
	/**
	 * Specifies a generic MEI version label.
	 */
	"@meiversion": v.optional(v.string()),
});

export type AttrMeiVersionData = v.InferOutput<typeof AttrMeiVersionSchema>;
