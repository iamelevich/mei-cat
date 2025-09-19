import * as v from "valibot";
import { AttrPitchedSchema } from "../../shared/attr/pitched";
import { AttrStringtabSchema } from "../../stringtab/attr/stringtab";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chordMember.log.html
 */
export const AttrChordMemberLogSchema = v.object({
	// Inherited attribute classes
	...AttrPitchedSchema.entries,
	...AttrStringtabSchema.entries,
});

export type AttrChordMemberLogData = v.InferOutput<
	typeof AttrChordMemberLogSchema
>;
