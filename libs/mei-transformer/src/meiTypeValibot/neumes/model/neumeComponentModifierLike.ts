import * as v from "valibot";
import {
	type LiquescentData,
	LiquescentSchema,
	type OriscusData,
	OriscusSchema,
	type QuilismaData,
	QuilismaSchema,
	type StrophicusData,
	StrophicusSchema,
} from "..";

/**
 * Groups elements that modify neume components.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.neumeComponentModifierLike.html
 */
export const ModelNeumeComponentModifierLikeSchema: v.GenericSchema<ModelNeumeComponentModifierLikeData> =
	v.object({
		/**
		 * Liquescent.
		 * @see https://music-encoding.org/guidelines/v5/elements/liquescent.html
		 */
		liquescent: v.optional(
			v.union([
				v.lazy(() => LiquescentSchema),
				v.array(v.lazy(() => LiquescentSchema)),
			]),
		),
		/**
		 * Oriscus.
		 * @see https://music-encoding.org/guidelines/v5/elements/oriscus.html
		 */
		oriscus: v.optional(
			v.union([
				v.lazy(() => OriscusSchema),
				v.array(v.lazy(() => OriscusSchema)),
			]),
		),
		/**
		 * Quilisma.
		 * @see https://music-encoding.org/guidelines/v5/elements/quilisma.html
		 */
		quilisma: v.optional(
			v.union([
				v.lazy(() => QuilismaSchema),
				v.array(v.lazy(() => QuilismaSchema)),
			]),
		),
		/**
		 * Strophicus.
		 * @see https://music-encoding.org/guidelines/v5/elements/strophicus.html
		 */
		strophicus: v.optional(
			v.union([
				v.lazy(() => StrophicusSchema),
				v.array(v.lazy(() => StrophicusSchema)),
			]),
		),
	});

export type ModelNeumeComponentModifierLikeData = {
	liquescent?: LiquescentData | LiquescentData[];
	oriscus?: OriscusData | OriscusData[];
	quilisma?: QuilismaData | QuilismaData[];
	strophicus?: StrophicusData | StrophicusData[];
};
