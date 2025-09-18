import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";

/**
 * Logical domain attributes.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pedal.log.html
 */
export const AttrPedalLogSchema = v.object({
	...AttrControlEventSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,

	/**
	 * Records the position of the piano damper pedal.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pedal.log.html#dir
	 */
	"@dir": v.union([
		v.literal("down"),
		v.literal("up"),
		v.literal("half"),
		v.literal("bounce"),
	]),

	/**
	 * Indicates the function of the depressed pedal, but not necessarily the text associated with its use. Use the dir element for such text.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.pedal.log.html#func
	 */
	"@func": v.optional(
		v.union([
			v.literal("sustain"),
			v.literal("soft"),
			v.literal("sostenuto"),
			v.literal("silent"),
		]),
	),
});

export type AttrPedalLogData = v.InferOutput<typeof AttrPedalLogSchema>;
