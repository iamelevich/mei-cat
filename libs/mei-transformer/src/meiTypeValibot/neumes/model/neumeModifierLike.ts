import * as v from "valibot";
import { type EpisemaData, EpisemaSchema } from "../element/episema";
import { type HispanTickData, HispanTickSchema } from "../element/hispanTick";
import { type SignifLetData, SignifLetSchema } from "../element/signifLet";

/**
 * Groups elements that modify neume-like features.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.neumeModifierLike.html
 */
export const ModelNeumeModifierLikeSchema: v.GenericSchema<ModelNeumeModifierLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Episema.
			 * @see https://music-encoding.org/guidelines/v5/elements/episema.html
			 */
			episema: v.optional(v.union([EpisemaSchema, v.array(EpisemaSchema)])),
			/**
			 * Hispanic tick.
			 * @see https://music-encoding.org/guidelines/v5/elements/hispanTick.html
			 */
			hispanTick: v.optional(
				v.union([HispanTickSchema, v.array(HispanTickSchema)]),
			),
			/**
			 * Significantive letter(s).
			 * @see https://music-encoding.org/guidelines/v5/elements/signifLet.html
			 */
			signifLet: v.optional(
				v.union([SignifLetSchema, v.array(SignifLetSchema)]),
			),
		}),
	);

export type ModelNeumeModifierLikeData = {
	episema?: EpisemaData | EpisemaData[];
	hispanTick?: HispanTickData | HispanTickData[];
	signifLet?: SignifLetData | SignifLetData[];
};
