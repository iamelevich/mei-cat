import * as v from "valibot";

/**
 * Visual domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chordMember.vis.html
 */
export const AttrChordMemberVisSchema = v.object({
	// No attributes in MEI schema
});

export type AttrChordMemberVisData = v.InferOutput<
	typeof AttrChordMemberVisSchema
>;
