import * as v from "valibot";
import {
	AttrAccidentalGesSchema,
	AttrArticulationGesSchema,
	AttrDurationGesSchema,
	AttrPitchGesSchema,
} from "..";
import { AttrInstrumentIdentSchema, AttrMidiVelocitySchema } from "../../midi";
import { AttrNoteGesMensuralSchema } from "../../mensural";
import { AttrStringtabSchema } from "../../stringtab";

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
