import * as v from "valibot";
import { AttrNoteGesMensuralSchema } from "../../mensural/attr/note.ges.mensural";
import { AttrInstrumentIdentSchema } from "../../midi/attr/instrumentIdent";
import { AttrMidiVelocitySchema } from "../../midi/attr/midiVelocity";
import { AttrStringtabSchema } from "../../stringtab/attr/stringtab";
import { AttrAccidentalGesSchema } from "../attr/accidental.ges";
import { AttrArticulationGesSchema } from "../attr/articulation.ges";
import { AttrDurationGesSchema } from "../attr/duration.ges";
import { AttrPitchGesSchema } from "../attr/pitch.ges";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.ges.html
 */
export const AttrNoteGesSchema = v.object({
	// Inherited attribute classes
	...AttrAccidentalGesSchema.entries,
	...AttrArticulationGesSchema.entries,
	...AttrDurationGesSchema.entries,
	...AttrInstrumentIdentSchema.entries,
	...AttrMidiVelocitySchema.entries,
	...AttrNoteGesMensuralSchema.entries,
	...AttrPitchGesSchema.entries,
	...AttrStringtabSchema.entries,

	// Direct attributes
	/**
	 * Indicates an extreme, indefinite performed pitch.
	 */
	"@extremis": v.optional(v.string()),
});

export type AttrNoteGesData = v.InferOutput<typeof AttrNoteGesSchema>;
