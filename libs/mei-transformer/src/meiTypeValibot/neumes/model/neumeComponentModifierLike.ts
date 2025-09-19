import * as v from "valibot";
import { type LiquescentData, LiquescentSchema } from "../element/liquescent";
import { type OriscusData, OriscusSchema } from "../element/oriscus";
import { type QuilismaData, QuilismaSchema } from "../element/quilisma";
import { type StrophicusData, StrophicusSchema } from "../element/strophicus";

/**
 * Groups elements that modify neume components.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.neumeComponentModifierLike.html
 */
export const ModelNeumeComponentModifierLikeSchema: v.GenericSchema<ModelNeumeComponentModifierLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Liquescent.
			 * @see https://music-encoding.org/guidelines/v5/elements/liquescent.html
			 */
			liquescent: v.optional(
				v.union([v.array(LiquescentSchema), LiquescentSchema]),
			),
			/**
			 * Oriscus.
			 * @see https://music-encoding.org/guidelines/v5/elements/oriscus.html
			 */
			oriscus: v.optional(v.union([v.array(OriscusSchema), OriscusSchema])),
			/**
			 * Quilisma.
			 * @see https://music-encoding.org/guidelines/v5/elements/quilisma.html
			 */
			quilisma: v.optional(v.union([v.array(QuilismaSchema), QuilismaSchema])),
			/**
			 * Strophicus.
			 * @see https://music-encoding.org/guidelines/v5/elements/strophicus.html
			 */
			strophicus: v.optional(
				v.union([v.array(StrophicusSchema), StrophicusSchema]),
			),
		}),
	);

export type ModelNeumeComponentModifierLikeData = {
	liquescent?: LiquescentData | LiquescentData[];
	oriscus?: OriscusData | OriscusData[];
	quilisma?: QuilismaData | QuilismaData[];
	strophicus?: StrophicusData | StrophicusData[];
};
