import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMidiEventSchema } from "../attr/midi.event";
import { AttrMidiNumberSchema } from "../attr/midiNumber";

/**
 * Base schema with attribute, to simplify types for PortSchema
 */
const PortBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMidiEventSchema.entries,
	...AttrMidiNumberSchema.entries,
});

/**
 * MIDI port.
 * @see https://music-encoding.org/guidelines/v5/elements/port.html
 */
export const PortSchema = v.lazy(() => v.intersect([PortBaseSchema]));

export type PortData = v.InferOutput<typeof PortSchema>;
