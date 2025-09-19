import * as v from "valibot";
import { type EditionData, EditionSchema } from "..";

/**
 * Groups elements containing bibliographic edition information.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.editionLike.html
 */
export const ModelEditionLikeSchema: v.GenericSchema<ModelEditionLikeData> =
	v.object({
		/**
		 * A word or text phrase that indicates a difference in either content or form between the item being described and a related item previously issued by the same publisher/distributor ( e.g. , 2nd edition, version 2.0, etc.), or simultaneously issued by either the same publisher/distributor or another publisher/distributor ( e.g. , large print edition, British edition, etc.).
		 * @see https://music-encoding.org/guidelines/v5/elements/edition.html
		 */
		edition: v.optional(
			v.union([
				v.lazy(() => EditionSchema),
				v.array(v.lazy(() => EditionSchema)),
			]),
		),
	});

export type ModelEditionLikeData = {
	edition?: EditionData | EditionData[];
};
