import * as v from "valibot";
import { AttrChordDefAnlSchema } from "../../analytical/attr/chordDef.anl";
import { StandardTagSchema } from "../../common";
import { AttrChordDefGesSchema } from "../../gestural/attr/chordDef.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { BarreSchema } from "../../stringtab/element/barre";
import { AttrChordDefVisSchema } from "../../visual/attr/chordDef.vis";
import { AttrChordDefLogSchema } from "../attr/chordDef.log";
import { ChordMemberSchema } from "../element/chordMember";

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
export const ChordDefSchema = v.lazy(() =>
	v.intersect([
		ChordDefBaseSchema,
		v.object({
			/**
			 * Reference to element barre
			 * @see https://music-encoding.org/guidelines/v5/elements/barre.html
			 */
			barre: v.optional(v.union([v.array(BarreSchema), BarreSchema])),
			/**
			 * Reference to element chordMember
			 * @see https://music-encoding.org/guidelines/v5/elements/chordMember.html
			 */
			chordMember: v.optional(
				v.union([v.array(ChordMemberSchema), ChordMemberSchema]),
			),
		}),
	]),
);

export type ChordDefData = v.InferOutput<typeof ChordDefSchema>;
