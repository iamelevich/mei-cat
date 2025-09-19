import * as v from "valibot";
import { AttrAccidentalGesSchema } from "..";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chordMember.ges.html
 */
export const AttrChordMemberGesSchema = v.object({
	// Inherited attribute classes
	...AttrAccidentalGesSchema.entries,
});

export type AttrChordMemberGesData = v.InferOutput<
	typeof AttrChordMemberGesSchema
>;
