import * as v from "valibot";
import { AttrChannelizedSchema } from "../../midi/attr/channelized";
import { AttrMidiInstrumentSchema } from "../../midi/attr/midiInstrument";
import { AttrSoundLocationSchema } from "../attr/soundLocation";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.instrDef.ges.html
 */
export const AttrInstrDefGesSchema = v.object({
	// Inherited attribute classes
	...AttrChannelizedSchema.entries,
	...AttrMidiInstrumentSchema.entries,
	...AttrSoundLocationSchema.entries,
});

export type AttrInstrDefGesData = v.InferOutput<typeof AttrInstrDefGesSchema>;
