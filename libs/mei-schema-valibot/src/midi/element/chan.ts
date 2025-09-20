import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMidiEventSchema } from "../attr/midi.event";

/**
 * Base schema with attribute, to simplify types for ChanSchema
 */
const ChanBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMidiEventSchema.entries,

	// Direct attributes
	/**
	 * MIDI number in the range set by data.MIDICHANNEL.
	 */
	"@num": v.optional(v.string()),
});

/**
 * MIDI channel assignment.
 * @see https://music-encoding.org/guidelines/v5/elements/chan.html
 */
export const ChanSchema = v.lazy(() => v.intersect([ChanBaseSchema]));

export type ChanData = v.InferOutput<typeof ChanSchema>;
