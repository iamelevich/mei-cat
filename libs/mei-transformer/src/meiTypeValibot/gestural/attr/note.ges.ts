import * as v from "valibot";
import { AttrNoteGesMensuralSchema } from "../../mensural";
import { AttrInstrumentIdentSchema, AttrMidiVelocitySchema } from "../../midi";
import { AttrStringtabSchema } from "../../stringtab";
import {
	AttrAccidentalGesSchema,
	AttrArticulationGesSchema,
	AttrDurationGesSchema,
	AttrPitchGesSchema,
} from "..";

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
