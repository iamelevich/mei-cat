import * as v from "valibot";
import { type MidiData, MidiSchema } from "..";

/**
 * Groups elements which group MIDI-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.midiLike.html
 */
export const ModelMidiLikeSchema: v.GenericSchema<ModelMidiLikeData> = v.object(
	{
		/**
		 * Container for elements that contain information useful when generating MIDI output.
		 * @see https://music-encoding.org/guidelines/v5/elements/midi.html
		 */
		midi: v.optional(
			v.union([v.lazy(() => MidiSchema), v.array(v.lazy(() => MidiSchema))]),
		),
	},
);

export type ModelMidiLikeData = {
	midi?: MidiData | MidiData[];
};
