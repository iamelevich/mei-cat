import * as v from "valibot";
import { AttrIntervalHarmonicSchema } from "..";

/**
 * Analytical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chordMember.anl.html
 */
export const AttrChordMemberAnlSchema = v.object({
	// Inherited attribute classes
	...AttrIntervalHarmonicSchema.entries,
});

export type AttrChordMemberAnlData = v.InferOutput<
	typeof AttrChordMemberAnlSchema
>;
