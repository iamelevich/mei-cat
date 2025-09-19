import * as v from "valibot";
import { type MeiCorpusData, MeiCorpusSchema } from "../element/meiCorpus";

/**
 * Groups elements that may be document elements when the corpus module is invoked.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.startLike.corpus.html
 */
export const ModelStartLikeCorpusSchema: v.GenericSchema<ModelStartLikeCorpusData> =
	v.lazy(() =>
		v.object({
			/**
			 * A group of related MEI documents, consisting of a header for the group, and one or more mei elements, each with its own complete header.
			 * @see https://music-encoding.org/guidelines/v5/elements/meiCorpus.html
			 */
			meiCorpus: v.optional(
				v.union([MeiCorpusSchema, v.array(MeiCorpusSchema)]),
			),
		}),
	);

export type ModelStartLikeCorpusData = {
	meiCorpus?: MeiCorpusData | MeiCorpusData[];
};
