import * as v from "valibot";
import { type ChordTableData, ChordTableSchema } from "../element/chordTable";

/**
 * Groups elements that group playable chord definitions.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.chordTableLike.html
 */
export const ModelChordTableLikeSchema: v.GenericSchema<ModelChordTableLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Chord/tablature look-up table.
			 * @see https://music-encoding.org/guidelines/v5/elements/chordTable.html
			 */
			chordTable: v.optional(
				v.union([v.array(ChordTableSchema), ChordTableSchema]),
			),
		}),
	);

export type ModelChordTableLikeData = {
	chordTable?: ChordTableData | ChordTableData[];
};
