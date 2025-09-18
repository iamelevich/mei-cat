import * as v from "valibot";
import {
	AttrHandIdentSchema,
	AttrSequenceSchema,
	AttrSourceSchema,
} from "../../shared";

/**
 * Attributes for crit.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.crit.html
 */
export const AttrCritSchema = v.object({
	// att.crit is a member of att.handIdent, att.sequence, att.source
	...AttrHandIdentSchema.entries,
	...AttrSequenceSchema.entries,
	...AttrSourceSchema.entries,
	/**
	 * Classifies the cause for the variant reading, according to any appropriate typology of possible origins.
	 * Value is an XML NMTOKEN.
	 */
	"@cause": v.optional(v.string()),
});

export type AttrCritData = v.InferOutput<typeof AttrCritSchema>;
