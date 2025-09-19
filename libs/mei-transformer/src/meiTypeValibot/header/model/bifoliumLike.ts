import * as v from "valibot";
import { type BifoliumData, BifoliumSchema } from "..";

/**
 * Collects bifoliumlike elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.bifoliumLike.html
 */
export const ModelBifoliumLikeSchema: v.GenericSchema<ModelBifoliumLikeData> =
	v.object({
		/**
		 * Describes a folded sheet of paper.
		 * @see https://music-encoding.org/guidelines/v5/elements/bifolium.html
		 */
		bifolium: v.optional(
			v.union([
				v.lazy(() => BifoliumSchema),
				v.array(v.lazy(() => BifoliumSchema)),
			]),
		),
	});

export type ModelBifoliumLikeData = {
	bifolium?: BifoliumData | BifoliumData[];
};
