import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMidiEventSchema } from "../attr/midi.event";

/**
 * Base schema with attribute, to simplify types for SeqNumSchema
 */
const SeqNumBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMidiEventSchema.entries,

	// Direct attributes
	/**
	 * Number in the range 0-65535.
	 */
	"@num": v.optional(v.string()),
});

/**
 * MIDI sequence number.
 * @see https://music-encoding.org/guidelines/v5/elements/seqNum.html
 */
export const SeqNumSchema = v.lazy(() => v.intersect([SeqNumBaseSchema]));

export type SeqNumData = v.InferOutput<typeof SeqNumSchema>;
