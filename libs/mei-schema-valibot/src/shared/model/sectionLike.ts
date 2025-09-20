import * as v from "valibot";
import { type SectionData, SectionSchema } from "../element/section";

/**
 * Groups elements that represent a segment of music notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.sectionLike.html
 */
export const ModelSectionLikeSchema: v.GenericSchema<ModelSectionLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Segment of music data.
			 * @see https://music-encoding.org/guidelines/v5/elements/section.html
			 */
			section: v.optional(v.union([v.array(SectionSchema), SectionSchema])),
		}),
	);

export type ModelSectionLikeData = {
	section?: SectionData | SectionData[];
};
