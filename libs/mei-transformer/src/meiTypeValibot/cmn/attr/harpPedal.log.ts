import * as v from "valibot";
import { AttrControlEventSchema, AttrStartEndIdSchema } from "../../shared";

/**
 * Logical domain attributes. The pedal setting, <abbr>i.e.</abbr>, flat, natural, or sharp, for each diatonic pitch name is indicated by the seven letter-named attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.harpPedal.log.html
 */
export const AttrHarpPedalLogSchema = v.object({
	// Inherited attribute classes
	...AttrControlEventSchema.entries,
	...AttrStartEndIdSchema.entries,

	// Direct attributes
	/**
	 * Indicates the pedal setting for the harp’s A strings.
	 */
	"@a": v.optional(v.string()),
	/**
	 * Indicates the pedal setting for the harp’s B strings.
	 */
	"@b": v.optional(v.string()),
	/**
	 * Indicates the pedal setting for the harp’s C strings.
	 */
	"@c": v.optional(v.string()),
	/**
	 * Indicates the pedal setting for the harp’s D strings.
	 */
	"@d": v.optional(v.string()),
	/**
	 * Indicates the pedal setting for the harp’s E strings.
	 */
	"@e": v.optional(v.string()),
	/**
	 * Indicates the pedal setting for the harp’s F strings.
	 */
	"@f": v.optional(v.string()),
	/**
	 * Indicates the pedal setting for the harp’s G strings.
	 */
	"@g": v.optional(v.string()),
});

export type AttrHarpPedalLogData = v.InferOutput<typeof AttrHarpPedalLogSchema>;
