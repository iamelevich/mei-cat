import * as v from "valibot";

/**
 * Attributes that can be used to associate a representation such as a name or title with canonical information about the object being named or referenced..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.canonical.html
 */
export const AttrCanonicalSchema = v.object({
	// Direct attributes
	/**
	 * A value that represents or identifies other data. Often, it is a primary key in the database or a unique value in the coded list identified by the <att>auth</att> or <att>auth.uri</att> attributes.
	 */
	"@codedval": v.optional(v.string()),
});

export type AttrCanonicalData = v.InferOutput<typeof AttrCanonicalSchema>;
