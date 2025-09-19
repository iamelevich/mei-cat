import * as v from "valibot";
import { AttrChordAnlCmnSchema } from "../../cmn";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chord.anl.html
 */
export const AttrChordAnlSchema = v.object({
	// Inherited attribute classes
	...AttrChordAnlCmnSchema.entries,
});

export type AttrChordAnlData = v.InferOutput<typeof AttrChordAnlSchema>;
