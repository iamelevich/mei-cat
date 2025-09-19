import * as v from "valibot";
import { AttrAltSymSchema } from "../../usersymbols";
import { AttrExtSymSchema } from "../../externalsymbols";
import { AttrTypographySchema } from "../../shared";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.sb.vis.html
 */
export const AttrSbVisSchema = v.object({
	// Inherited attribute classes
	...AttrAltSymSchema.entries,
	...AttrExtSymSchema.entries,
	...AttrTypographySchema.entries,

	// Direct attributes
	/**
	 * Indicates whether hash marks should be rendered between systems. See Read, p. 436, ex. 26-3.
	 */
	"@form": v.optional(v.string()),
});

export type AttrSbVisData = v.InferOutput<typeof AttrSbVisSchema>;
