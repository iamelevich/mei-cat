import * as v from "valibot";
import { type DateData, DateSchema } from "..";

/**
 * Groups elements containing date expressions.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.dateLike.html
 */
export const ModelDateLikeSchema: v.GenericSchema<ModelDateLikeData> = v.object(
	{
		/**
		 * A string identifying a point in time or the time period between two such points.
		 * @see https://music-encoding.org/guidelines/v5/elements/date.html
		 */
		date: v.optional(
			v.union([v.lazy(() => DateSchema), v.array(v.lazy(() => DateSchema))]),
		),
	},
);

export type ModelDateLikeData = {
	date?: DateData | DateData[];
};
