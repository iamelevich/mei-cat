import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrMidiEventSchema, AttrMidiNumberSchema } from "..";

/**
 * Base schema with attribute, to simplify types for VelSchema
 */
const VelBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMidiEventSchema.entries,
	...AttrMidiNumberSchema.entries,

	// Direct attributes
	/**
	 * Indicates whether this is note-on or note-off velocity data.
	 */
	"@form": v.optional(v.string()),
});

/**
 * MIDI Note-on/off velocity.
 * @see https://music-encoding.org/guidelines/v5/elements/vel.html
 */
export const VelSchema = v.intersect([VelBaseSchema]);

export type VelData = v.InferOutput<typeof VelSchema>;
