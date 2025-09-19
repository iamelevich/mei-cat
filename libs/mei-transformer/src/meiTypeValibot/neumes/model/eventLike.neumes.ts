import * as v from "valibot";
import {
	type DivLineData,
	DivLineSchema,
	type NeumeData,
	NeumeSchema,
} from "..";

/**
 * Groups event elements that occur in the neume repertoire.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.eventLike.neumes.html
 */
export const ModelEventLikeNeumesSchema: v.GenericSchema<ModelEventLikeNeumesData> =
	v.object({
		/**
		 * Represents a division (divisio) in neume notation. Divisions indicate short, medium, or long pauses similar to breath marks in modern notation.
		 * @see https://music-encoding.org/guidelines/v5/elements/divLine.html
		 */
		divLine: v.optional(
			v.union([
				v.lazy(() => DivLineSchema),
				v.array(v.lazy(() => DivLineSchema)),
			]),
		),
		/**
		 * Sign representing one or more musical pitches.
		 * @see https://music-encoding.org/guidelines/v5/elements/neume.html
		 */
		neume: v.optional(
			v.union([v.lazy(() => NeumeSchema), v.array(v.lazy(() => NeumeSchema))]),
		),
	});

export type ModelEventLikeNeumesData = {
	divLine?: DivLineData | DivLineData[];
	neume?: NeumeData | NeumeData[];
};
