import * as v from "valibot";
import {
	type EpisemaData,
	EpisemaSchema,
	type HispanTickData,
	HispanTickSchema,
	type SignifLetData,
	SignifLetSchema,
} from "..";

/**
 * Groups elements that modify neume-like features.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.neumeModifierLike.html
 */
export const ModelNeumeModifierLikeSchema: v.GenericSchema<ModelNeumeModifierLikeData> =
	v.object({
		/**
		 * Episema.
		 * @see https://music-encoding.org/guidelines/v5/elements/episema.html
		 */
		episema: v.optional(
			v.union([
				v.lazy(() => EpisemaSchema),
				v.array(v.lazy(() => EpisemaSchema)),
			]),
		),
		/**
		 * Hispanic tick.
		 * @see https://music-encoding.org/guidelines/v5/elements/hispanTick.html
		 */
		hispanTick: v.optional(
			v.union([
				v.lazy(() => HispanTickSchema),
				v.array(v.lazy(() => HispanTickSchema)),
			]),
		),
		/**
		 * Significantive letter(s).
		 * @see https://music-encoding.org/guidelines/v5/elements/signifLet.html
		 */
		signifLet: v.optional(
			v.union([
				v.lazy(() => SignifLetSchema),
				v.array(v.lazy(() => SignifLetSchema)),
			]),
		),
	});

export type ModelNeumeModifierLikeData = {
	episema?: EpisemaData | EpisemaData[];
	hispanTick?: HispanTickData | HispanTickData[];
	signifLet?: SignifLetData | SignifLetData[];
};
