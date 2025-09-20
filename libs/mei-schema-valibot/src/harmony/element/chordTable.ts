import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ChordDefSchema } from "./chordDef";

/**
 * Base schema with attribute, to simplify types for ChordTableSchema
 */
const ChordTableBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Chord/tablature look-up table.
 * @see https://music-encoding.org/guidelines/v5/elements/chordTable.html
 */
export const ChordTableSchema = v.lazy(() =>
	v.intersect([
		ChordTableBaseSchema,
		v.object({
			/**
			 * Reference to element chordDef
			 * @see https://music-encoding.org/guidelines/v5/elements/chordDef.html
			 */
			chordDef: v.optional(v.union([v.array(ChordDefSchema), ChordDefSchema])),
		}),
	]),
);

export type ChordTableData = v.InferOutput<typeof ChordTableSchema>;
