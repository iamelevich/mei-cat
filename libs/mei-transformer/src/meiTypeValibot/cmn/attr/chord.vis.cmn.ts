import * as v from "valibot";
import { AttrBeamSecondarySchema } from "..";

/**
 * Visual domain attributes for chord. The slur, slur.dir, slur.rend, tie, tie.dir, and tie.rend attributes here are "syntactic sugar" for these attributes on each of the chord's individual notes. The values here apply to all the notes in the chord. If some notes are slurred or tied while others aren't, then the individual note attributes must be used..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chord.vis.cmn.html
 */
export const AttrChordVisCmnSchema = v.object({
	// Inherited attribute classes
	...AttrBeamSecondarySchema.entries,
});

export type AttrChordVisCmnData = v.InferOutput<typeof AttrChordVisCmnSchema>;
