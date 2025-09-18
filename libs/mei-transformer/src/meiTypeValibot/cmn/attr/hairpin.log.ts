import * as v from "valibot";
import {
	AttrControlEventSchema,
	AttrDurationAdditiveSchema,
	AttrStartEndIdSchema,
	AttrTimestamp2LogSchema,
} from "../../shared";

/**
 * Logical domain attributes.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hairpin.log.html
 */
export const AttrHairpinLogSchema = v.object({
	...AttrControlEventSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestamp2LogSchema.entries,

	/**
	 * Captures the visual rendition and function of the hairpin; that is, whether it indicates an increase or a decrease in volume.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hairpin.log.html#form
	 */
	"@form": v.union([v.literal("cres"), v.literal("dim")]),

	/**
	 * Indicates that the hairpin starts from or ends in silence. Often rendered as a small circle attached to the closed end of the hairpin. See Gould, p. 108.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.hairpin.log.html#niente
	 */
	"@niente": v.optional(v.union([v.literal("true"), v.literal("false")])),
});

export type AttrHairpinLogData = v.InferOutput<typeof AttrHairpinLogSchema>;
