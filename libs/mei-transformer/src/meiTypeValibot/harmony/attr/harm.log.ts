import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrDurationAdditiveSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harm.log.html
 */
export const AttrHarmLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,

	// Direct attributes
	/**
	 * Contains a reference to a <gi scheme="MEI">chordDef</gi> element elsewhere in the document.
	 */
	"@chordref": v.optional(v.string()),
});

export type AttrHarmLogData = v.InferOutput<typeof AttrHarmLogSchema>;
