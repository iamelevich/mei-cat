import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMidiEventSchema } from "../attr/midi.event";
import { AttrMidiNumberSchema } from "../attr/midiNumber";

/**
 * Base schema with attribute, to simplify types for ChanPrSchema
 */
const ChanPrBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMidiEventSchema.entries,
	...AttrMidiNumberSchema.entries,
});

/**
 * MIDI channel pressure/after touch.
 * @see https://music-encoding.org/guidelines/v5/elements/chanPr.html
 */
export const ChanPrSchema = v.lazy(() => v.intersect([ChanPrBaseSchema]));

export type ChanPrData = v.InferOutput<typeof ChanPrSchema>;
