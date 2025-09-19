import * as v from "valibot";
import { type DivLineData, DivLineSchema } from "../element/divLine";
import { type NeumeData, NeumeSchema } from "../element/neume";

/**
 * Groups event elements that occur in the neume repertoire.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.eventLike.neumes.html
 */
export const ModelEventLikeNeumesSchema: v.GenericSchema<ModelEventLikeNeumesData> =
	v.lazy(() =>
		v.object({
			/**
			 * Represents a division (divisio) in neume notation. Divisions indicate short, medium, or long pauses similar to breath marks in modern notation.
			 * @see https://music-encoding.org/guidelines/v5/elements/divLine.html
			 */
			divLine: v.optional(v.union([DivLineSchema, v.array(DivLineSchema)])),
			/**
			 * Sign representing one or more musical pitches.
			 * @see https://music-encoding.org/guidelines/v5/elements/neume.html
			 */
			neume: v.optional(v.union([NeumeSchema, v.array(NeumeSchema)])),
		}),
	);

export type ModelEventLikeNeumesData = {
	divLine?: DivLineData | DivLineData[];
	neume?: NeumeData | NeumeData[];
};
