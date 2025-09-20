import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMidiEventSchema } from "../attr/midi.event";
import { AttrMidiNumberSchema } from "../attr/midiNumber";

/**
 * Base schema with attribute, to simplify types for ProgSchema
 */
const ProgBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMidiEventSchema.entries,
	...AttrMidiNumberSchema.entries,
});

/**
 * MIDI program change.
 * @see https://music-encoding.org/guidelines/v5/elements/prog.html
 */
export const ProgSchema = v.lazy(() => v.intersect([ProgBaseSchema]));

export type ProgData = v.InferOutput<typeof ProgSchema>;
