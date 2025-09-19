import * as v from "valibot";
import { type BifoliumData, BifoliumSchema } from "../element/bifolium";

/**
 * Collects bifoliumlike elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.bifoliumLike.html
 */
export const ModelBifoliumLikeSchema: v.GenericSchema<ModelBifoliumLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Describes a folded sheet of paper.
			 * @see https://music-encoding.org/guidelines/v5/elements/bifolium.html
			 */
			bifolium: v.optional(v.union([BifoliumSchema, v.array(BifoliumSchema)])),
		}),
	);

export type ModelBifoliumLikeData = {
	bifolium?: BifoliumData | BifoliumData[];
};
