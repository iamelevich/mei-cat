import * as v from "valibot";
import {
	type MordentData,
	MordentSchema,
	type TrillData,
	TrillSchema,
	type TurnData,
	TurnSchema,
} from "..";

/**
 * Groups CMN ornament elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.ornamentLike.cmn.html
 */
export const ModelOrnamentLikeCmnSchema: v.GenericSchema<ModelOrnamentLikeCmnData> =
	v.object({
		/**
		 * An ornament indicating rapid alternation of the main note with a secondary note, usually a step below, but sometimes a step above.
		 * @see https://music-encoding.org/guidelines/v5/elements/mordent.html
		 */
		mordent: v.optional(
			v.union([
				v.lazy(() => MordentSchema),
				v.array(v.lazy(() => MordentSchema)),
			]),
		),
		/**
		 * Rapid alternation of a note with another (usually at the interval of a second above).
		 * @see https://music-encoding.org/guidelines/v5/elements/trill.html
		 */
		trill: v.optional(
			v.union([v.lazy(() => TrillSchema), v.array(v.lazy(() => TrillSchema))]),
		),
		/**
		 * An ornament consisting of four notes — the upper neighbor of the written note, the written note, the lower neighbor, and the written note.
		 * @see https://music-encoding.org/guidelines/v5/elements/turn.html
		 */
		turn: v.optional(
			v.union([v.lazy(() => TurnSchema), v.array(v.lazy(() => TurnSchema))]),
		),
	});

export type ModelOrnamentLikeCmnData = {
	mordent?: MordentData | MordentData[];
	trill?: TrillData | TrillData[];
	turn?: TurnData | TurnData[];
};
