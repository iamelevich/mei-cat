import * as v from "valibot";
import { AttrChordMemberAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrChordMemberGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrChordMemberVisSchema } from "../../visual";
import { AttrChordMemberLogSchema } from "..";

/**
 * Base schema with attribute, to simplify types for ChordMemberSchema
 */
const ChordMemberBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrChordMemberAnlSchema.entries,
	...AttrChordMemberGesSchema.entries,
	...AttrChordMemberLogSchema.entries,
	...AttrChordMemberVisSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * An individual pitch in a chord defined by a <gi scheme="MEI">chordDef</gi> element.
 * @see https://music-encoding.org/guidelines/v5/elements/chordMember.html
 */
export const ChordMemberSchema = v.intersect([ChordMemberBaseSchema]);

export type ChordMemberData = v.InferOutput<typeof ChordMemberSchema>;
