import * as v from "valibot";

/**
 * Groups CMN measure-like elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.measureLike.html
 */
export const MeasureLikeSchema = v.object({
	/**
	 * Unit of musical time consisting of a fixed number of note values of a given type, as determined by the prevailing meter, and delimited in musical notation by bar lines.
	 * @see https://music-encoding.org/guidelines/v5/elements/measure.html
	 */
	measure: v.optional(
		v.union([
			v.lazy(() => import("../measure").then((m) => m.MeasureSchema)),
			v.array(v.lazy(() => import("../measure").then((m) => m.MeasureSchema))),
		]),
	),
});

export type MeasureLikeData = v.InferOutput<typeof MeasureLikeSchema>;
