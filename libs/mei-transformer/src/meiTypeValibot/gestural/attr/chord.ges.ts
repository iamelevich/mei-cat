import * as v from "valibot";
import { AttrArticulationGesSchema, AttrDurationGesSchema } from "..";
import { AttrChordGesCmnSchema } from "../../cmn";
import { AttrInstrumentIdentSchema } from "../../midi";

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
