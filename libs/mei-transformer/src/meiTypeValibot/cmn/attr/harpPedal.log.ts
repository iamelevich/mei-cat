import * as v from "valibot";
import { AttrControlEventSchema, AttrStartEndIdSchema } from "../../shared";

/**
 * Logical domain attributes. The pedal setting, i.e., flat, natural, or sharp, for each diatonic pitch name is indicated by the seven letter-named attributes.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harpPedal.log.html
 */
export const AttrHarpPedalLogSchema = v.object({
	...AttrControlEventSchema.entries,
	...AttrStartEndIdSchema.entries,

	/**
	 * Indicates the pedal setting for the harp's C strings.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harpPedal.log.html#c
	 */
	"@c": v.optional(v.union([v.literal("f"), v.literal("n"), v.literal("s")])),

	/**
	 * Indicates the pedal setting for the harp's D strings.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harpPedal.log.html#d
	 */
	"@d": v.optional(v.union([v.literal("f"), v.literal("n"), v.literal("s")])),

	/**
	 * Indicates the pedal setting for the harp's E strings.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harpPedal.log.html#e
	 */
	"@e": v.optional(v.union([v.literal("f"), v.literal("n"), v.literal("s")])),

	/**
	 * Indicates the pedal setting for the harp's F strings.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harpPedal.log.html#f
	 */
	"@f": v.optional(v.union([v.literal("f"), v.literal("n"), v.literal("s")])),

	/**
	 * Indicates the pedal setting for the harp's G strings.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harpPedal.log.html#g
	 */
	"@g": v.optional(v.union([v.literal("f"), v.literal("n"), v.literal("s")])),

	/**
	 * Indicates the pedal setting for the harp's A strings.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harpPedal.log.html#a
	 */
	"@a": v.optional(v.union([v.literal("f"), v.literal("n"), v.literal("s")])),

	/**
	 * Indicates the pedal setting for the harp's B strings.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harpPedal.log.html#b
	 */
	"@b": v.optional(v.union([v.literal("f"), v.literal("n"), v.literal("s")])),
});

export type AttrHarpPedalLogData = v.InferOutput<typeof AttrHarpPedalLogSchema>;
