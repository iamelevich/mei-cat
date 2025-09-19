import * as v from "valibot";
import {
	type AbbrData,
	AbbrSchema,
	type ExpanData,
	ExpanSchema,
} from "../../edittrans";

/**
 * Groups editorial intervention elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.editorialLike.html
 */
export const ModelEditorialLikeSchema: v.GenericSchema<ModelEditorialLikeData> =
	v.object({
		/**
		 * A generic element for 1) a shortened form of a word, including an acronym or 2) a shorthand notation.
		 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
		 */
		abbr: v.optional(
			v.union([v.lazy(() => AbbrSchema), v.array(v.lazy(() => AbbrSchema))]),
		),
		/**
		 * Contains the expansion of an abbreviation.
		 * @see https://music-encoding.org/guidelines/v5/elements/expan.html
		 */
		expan: v.optional(
			v.union([v.lazy(() => ExpanSchema), v.array(v.lazy(() => ExpanSchema))]),
		),
	});

export type ModelEditorialLikeData = {
	abbr?: AbbrData | AbbrData[];
	expan?: ExpanData | ExpanData[];
};
