import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrChordDefAnlSchema } from "../../analytical";
import { AttrChordDefGesSchema } from "../../gestural";
import { AttrChordDefLogSchema } from "..";
import { AttrChordDefVisSchema } from "../../visual";
import { AttrCommonSchema } from "../../shared";
import { BarreSchema } from "../../stringtab";
import { ChordMemberSchema } from ".";

/**
 * Base schema with attribute, to simplify types for ChordDefSchema
 */
const ChordDefBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrChordDefAnlSchema.entries,
	...AttrChordDefGesSchema.entries,
	...AttrChordDefLogSchema.entries,
	...AttrChordDefVisSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Chord tablature definition.
 * @see https://music-encoding.org/guidelines/v5/elements/chordDef.html
 */
export const ChordDefSchema = v.intersect([
	ChordDefBaseSchema,
	v.object({
		/**
		 * Reference to element barre
		 * @see https://music-encoding.org/guidelines/v5/elements/barre.html
		 */
		barre: v.optional(
			v.union([v.lazy(() => BarreSchema), v.array(v.lazy(() => BarreSchema))]),
		),
		/**
		 * Reference to element chordMember
		 * @see https://music-encoding.org/guidelines/v5/elements/chordMember.html
		 */
		chordMember: v.optional(
			v.union([
				v.lazy(() => ChordMemberSchema),
				v.array(v.lazy(() => ChordMemberSchema)),
			]),
		),
	}),
]);

export type ChordDefData = v.InferOutput<typeof ChordDefSchema>;
