import * as v from "valibot";
import { AttrStartIdSchema } from "../../shared/attr/startId";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.anchoredText.log.html
 */
export const AttrAnchoredTextLogSchema = v.object({
	// Inherited attribute classes
	...AttrStartIdSchema.entries,

	// Direct attributes
	/**
	 * Indicates the function of the text.
	 */
	"@func": v.optional(v.string()),
});

export type AttrAnchoredTextLogData = v.InferOutput<
	typeof AttrAnchoredTextLogSchema
>;
