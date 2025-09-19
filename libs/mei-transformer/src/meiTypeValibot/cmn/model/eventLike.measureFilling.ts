import * as v from "valibot";
import { type MRestData, MRestSchema } from "../element/mRest";
import { type MRptData, MRptSchema } from "../element/mRpt";
import { type MRpt2Data, MRpt2Schema } from "../element/mRpt2";
import { type MSpaceData, MSpaceSchema } from "../element/mSpace";
import { type MultiRestData, MultiRestSchema } from "../element/multiRest";
import { type MultiRptData, MultiRptSchema } from "../element/multiRpt";

/**
 * Groups events that completely fill a CMN measure.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.eventLike.measureFilling.html
 */
export const ModelEventLikeMeasureFillingSchema: v.GenericSchema<ModelEventLikeMeasureFillingData> =
	v.lazy(() =>
		v.object({
			/**
			 * Complete measure rest in any meter.
			 * @see https://music-encoding.org/guidelines/v5/elements/mRest.html
			 */
			mRest: v.optional(v.union([MRestSchema, v.array(MRestSchema)])),
			/**
			 * An indication that the previous measure should be repeated.
			 * @see https://music-encoding.org/guidelines/v5/elements/mRpt.html
			 */
			mRpt: v.optional(v.union([MRptSchema, v.array(MRptSchema)])),
			/**
			 * An indication that the previous two measures should be repeated.
			 * @see https://music-encoding.org/guidelines/v5/elements/mRpt2.html
			 */
			mRpt2: v.optional(v.union([MRpt2Schema, v.array(MRpt2Schema)])),
			/**
			 * A measure containing only empty space in any meter.
			 * @see https://music-encoding.org/guidelines/v5/elements/mSpace.html
			 */
			mSpace: v.optional(v.union([MSpaceSchema, v.array(MSpaceSchema)])),
			/**
			 * Multiple full measure rests compressed into a single bar, frequently found in performer parts.
			 * @see https://music-encoding.org/guidelines/v5/elements/multiRest.html
			 */
			multiRest: v.optional(
				v.union([MultiRestSchema, v.array(MultiRestSchema)]),
			),
			/**
			 * Multiple repeated measures.
			 * @see https://music-encoding.org/guidelines/v5/elements/multiRpt.html
			 */
			multiRpt: v.optional(v.union([MultiRptSchema, v.array(MultiRptSchema)])),
		}),
	);

export type ModelEventLikeMeasureFillingData = {
	mRest?: MRestData | MRestData[];
	mRpt?: MRptData | MRptData[];
	mRpt2?: MRpt2Data | MRpt2Data[];
	mSpace?: MSpaceData | MSpaceData[];
	multiRest?: MultiRestData | MultiRestData[];
	multiRpt?: MultiRptData | MultiRptData[];
};
