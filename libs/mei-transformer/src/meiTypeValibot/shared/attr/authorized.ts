import * as v from "valibot";
import { AttrCanonicalSchema } from "../attr/canonical";

/**
 * Attributes that describe the source of a controlled value..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.authorized.html
 */
export const AttrAuthorizedSchema = v.object({
	// Inherited attribute classes
	...AttrCanonicalSchema.entries,

	// Direct attributes
	/**
	 * A name or label associated with a controlled vocabulary or other authoritative source for this element or its content.
	 */
	"@auth": v.optional(v.string()),
	/**
	 * A web-accessible location of the controlled vocabulary or other authoritative source of identification or definition for this element or its content. This attribute may contain a complete URI or a partial URI which is completed by the value of the codedval attribute.
	 */
	"@auth.uri": v.optional(v.string()),
});

export type AttrAuthorizedData = v.InferOutput<typeof AttrAuthorizedSchema>;
