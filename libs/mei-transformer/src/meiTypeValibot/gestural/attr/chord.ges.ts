import * as v from "valibot";
import { AttrChordGesCmnSchema } from "../../cmn";
import { AttrInstrumentIdentSchema } from "../../midi";
import { AttrArticulationGesSchema, AttrDurationGesSchema } from "..";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chord.ges.html
 */
export const AttrChordGesSchema = v.object({
	// Inherited attribute classes
	...AttrArticulationGesSchema.entries,
	...AttrChordGesCmnSchema.entries,
	...AttrDurationGesSchema.entries,
	...AttrInstrumentIdentSchema.entries,
});

export type AttrChordGesData = v.InferOutput<typeof AttrChordGesSchema>;
