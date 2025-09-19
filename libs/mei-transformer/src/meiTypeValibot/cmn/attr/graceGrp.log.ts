import * as v from "valibot";
import { AttrEventSchema } from "../../shared/attr/event";
import { AttrGracedSchema } from "../attr/graced";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.graceGrp.log.html
 */
export const AttrGraceGrpLogSchema = v.object({
	// Inherited attribute classes
	...AttrEventSchema.entries,
	...AttrGracedSchema.entries,

	// Direct attributes
	/**
	 * Records whether the grace note group is attached to the following event or to the preceding one. The usual name for the latter is "Nachschlag".
	 */
	"@attach": v.optional(v.string()),
});

export type AttrGraceGrpLogData = v.InferOutput<typeof AttrGraceGrpLogSchema>;
