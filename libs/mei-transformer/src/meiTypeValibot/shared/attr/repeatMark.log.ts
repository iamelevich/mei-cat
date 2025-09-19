import * as v from "valibot";
import { AttrControlEventSchema } from "../attr/controlEvent";
import { AttrDurationAdditiveSchema } from "../attr/duration.additive";
import { AttrStartEndIdSchema } from "../attr/startEndId";
import { AttrTimestamp2LogSchema } from "../attr/timestamp2.log";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.repeatMark.log.html
 */
export const AttrRepeatMarkLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,

	// Direct attributes
	/**
	 * Indicates the function of the mark, usually implying a corresponding form.
	 */
	"@func": v.optional(v.string()),
});

export type AttrRepeatMarkLogData = v.InferOutput<
	typeof AttrRepeatMarkLogSchema
>;
