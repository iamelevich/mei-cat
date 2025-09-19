import * as v from "valibot";
import { type SyllableData, SyllableSchema } from "..";

/**
 * Groups elements that accommodate neumed text.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.syllableLike.html
 */
export const ModelSyllableLikeSchema: v.GenericSchema<ModelSyllableLikeData> =
	v.object({
		/**
		 * Neume notation can be thought of as &#34;neumed text&#34;. Therefore, the syllable element provides high-level organization in this repertoire.
		 * @see https://music-encoding.org/guidelines/v5/elements/syllable.html
		 */
		syllable: v.optional(
			v.union([
				v.lazy(() => SyllableSchema),
				v.array(v.lazy(() => SyllableSchema)),
			]),
		),
	});

export type ModelSyllableLikeData = {
	syllable?: SyllableData | SyllableData[];
};
