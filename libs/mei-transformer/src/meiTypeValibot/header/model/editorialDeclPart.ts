import * as v from "valibot";
import { type CorrectionData, CorrectionSchema } from "../element/correction";
import {
	type InterpretationData,
	InterpretationSchema,
} from "../element/interpretation";
import {
	type NormalizationData,
	NormalizationSchema,
} from "../element/normalization";
import {
	type SegmentationData,
	SegmentationSchema,
} from "../element/segmentation";
import { type StdValsData, StdValsSchema } from "../element/stdVals";

/**
 * Groups elements that may appear as part of a description of the editorial process applied to the encoding of notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.editorialDeclPart.html
 */
export const ModelEditorialDeclPartSchema: v.GenericSchema<ModelEditorialDeclPartData> =
	v.lazy(() =>
		v.object({
			/**
			 * States how and under what circumstances corrections have been made in the text.
			 * @see https://music-encoding.org/guidelines/v5/elements/correction.html
			 */
			correction: v.optional(
				v.union([v.array(CorrectionSchema), CorrectionSchema]),
			),
			/**
			 * Describes the scope of any analytic or interpretive information added to the transcription of the music.
			 * @see https://music-encoding.org/guidelines/v5/elements/interpretation.html
			 */
			interpretation: v.optional(
				v.union([v.array(InterpretationSchema), InterpretationSchema]),
			),
			/**
			 * Indicates the extent of normalization or regularization of the original source carried out in converting it to electronic form.
			 * @see https://music-encoding.org/guidelines/v5/elements/normalization.html
			 */
			normalization: v.optional(
				v.union([v.array(NormalizationSchema), NormalizationSchema]),
			),
			/**
			 * Describes the principles according to which the musical text has been segmented, for example into movements, sections, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/segmentation.html
			 */
			segmentation: v.optional(
				v.union([v.array(SegmentationSchema), SegmentationSchema]),
			),
			/**
			 * Specifies the format used when standardized date or number values are supplied.
			 * @see https://music-encoding.org/guidelines/v5/elements/stdVals.html
			 */
			stdVals: v.optional(v.union([v.array(StdValsSchema), StdValsSchema])),
		}),
	);

export type ModelEditorialDeclPartData = {
	correction?: CorrectionData | CorrectionData[];
	interpretation?: InterpretationData | InterpretationData[];
	normalization?: NormalizationData | NormalizationData[];
	segmentation?: SegmentationData | SegmentationData[];
	stdVals?: StdValsData | StdValsData[];
};
