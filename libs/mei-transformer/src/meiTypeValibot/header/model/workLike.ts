import * as v from "valibot";
import { type WorkData, WorkSchema } from "../element/work";

/**
 * Collects work-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.workLike.html
 */
export const ModelWorkLikeSchema: v.GenericSchema<ModelWorkLikeData> = v.lazy(
	() =>
		v.object({
			/**
			 * Provides a detailed description of a work — a distinct intellectual or artistic creation — specifically its history, language use, and high-level musical attributes ( e.g. , key, tempo, meter, medium of performance, and intended duration).
			 * @see https://music-encoding.org/guidelines/v5/elements/work.html
			 */
			work: v.optional(v.union([v.array(WorkSchema), WorkSchema])),
		}),
);

export type ModelWorkLikeData = {
	work?: WorkData | WorkData[];
};
