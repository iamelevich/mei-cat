import * as v from "valibot";
import { AttrDurationRatioSchema } from "../../shared/attr/duration.ratio";

/**
 * Gestural domain attributes in the Mensural repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.note.ges.mensural.html
 */
export const AttrNoteGesMensuralSchema = v.object({
	// Inherited attribute classes
	...AttrDurationRatioSchema.entries,
});

export type AttrNoteGesMensuralData = v.InferOutput<
	typeof AttrNoteGesMensuralSchema
>;
