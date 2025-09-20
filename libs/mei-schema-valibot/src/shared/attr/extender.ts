import * as v from "valibot";
import { AttrLineRendSchema } from "./lineRend";

/**
 * Attributes that describe extension symbols, typically lines. Members of this class are also typically members of the att.lineRend class..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.extender.html
 */
export const AttrExtenderSchema = v.object({
	// Inherited attribute classes
	...AttrLineRendSchema.entries,

	// Direct attributes
	/**
	 * Indicates the presence of an extension symbol, typically a line.
	 */
	"@extender": v.optional(v.string()),
});

export type AttrExtenderData = v.InferOutput<typeof AttrExtenderSchema>;
