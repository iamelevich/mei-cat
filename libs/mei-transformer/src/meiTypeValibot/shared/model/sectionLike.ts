import * as v from "valibot";
import { type SectionData, SectionSchema } from "..";

/**
 * Groups elements that represent a segment of music notation.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.sectionLike.html
 */
export const ModelSectionLikeSchema: v.GenericSchema<ModelSectionLikeData> =
	v.object({
		/**
		 * Segment of music data.
		 * @see https://music-encoding.org/guidelines/v5/elements/section.html
		 */
		section: v.optional(
			v.union([
				v.lazy(() => SectionSchema),
				v.array(v.lazy(() => SectionSchema)),
			]),
		),
	});

export type ModelSectionLikeData = {
	section?: SectionData | SectionData[];
};
