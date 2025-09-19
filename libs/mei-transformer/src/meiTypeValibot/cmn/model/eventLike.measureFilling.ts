import * as v from "valibot";
import {
	type MRestData,
	MRestSchema,
	type MRpt2Data,
	MRpt2Schema,
	type MRptData,
	MRptSchema,
	type MSpaceData,
	MSpaceSchema,
	type MultiRestData,
	MultiRestSchema,
	type MultiRptData,
	MultiRptSchema,
} from "..";

/**
 * Groups events that completely fill a CMN measure.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.eventLike.measureFilling.html
 */
export const ModelEventLikeMeasureFillingSchema: v.GenericSchema<ModelEventLikeMeasureFillingData> =
	v.object({
		/**
		 * Complete measure rest in any meter.
		 * @see https://music-encoding.org/guidelines/v5/elements/mRest.html
		 */
		mRest: v.optional(
			v.union([v.lazy(() => MRestSchema), v.array(v.lazy(() => MRestSchema))]),
		),
		/**
		 * An indication that the previous measure should be repeated.
		 * @see https://music-encoding.org/guidelines/v5/elements/mRpt.html
		 */
		mRpt: v.optional(
			v.union([v.lazy(() => MRptSchema), v.array(v.lazy(() => MRptSchema))]),
		),
		/**
		 * An indication that the previous two measures should be repeated.
		 * @see https://music-encoding.org/guidelines/v5/elements/mRpt2.html
		 */
		mRpt2: v.optional(
			v.union([v.lazy(() => MRpt2Schema), v.array(v.lazy(() => MRpt2Schema))]),
		),
		/**
		 * A measure containing only empty space in any meter.
		 * @see https://music-encoding.org/guidelines/v5/elements/mSpace.html
		 */
		mSpace: v.optional(
			v.union([
				v.lazy(() => MSpaceSchema),
				v.array(v.lazy(() => MSpaceSchema)),
			]),
		),
		/**
		 * Multiple full measure rests compressed into a single bar, frequently found in performer parts.
		 * @see https://music-encoding.org/guidelines/v5/elements/multiRest.html
		 */
		multiRest: v.optional(
			v.union([
				v.lazy(() => MultiRestSchema),
				v.array(v.lazy(() => MultiRestSchema)),
			]),
		),
		/**
		 * Multiple repeated measures.
		 * @see https://music-encoding.org/guidelines/v5/elements/multiRpt.html
		 */
		multiRpt: v.optional(
			v.union([
				v.lazy(() => MultiRptSchema),
				v.array(v.lazy(() => MultiRptSchema)),
			]),
		),
	});

export type ModelEventLikeMeasureFillingData = {
	mRest?: MRestData | MRestData[];
	mRpt?: MRptData | MRptData[];
	mRpt2?: MRpt2Data | MRpt2Data[];
	mSpace?: MSpaceData | MSpaceData[];
	multiRest?: MultiRestData | MultiRestData[];
	multiRpt?: MultiRptData | MultiRptData[];
};
