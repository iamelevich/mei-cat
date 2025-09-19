import * as v from "valibot";
import { type GeogNameData, GeogNameSchema } from "..";

/**
 * Groups geographic name elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.nameLike.geogName.html
 */
export const ModelNameLikeGeogNameSchema: v.GenericSchema<ModelNameLikeGeogNameData> =
	v.object({
		/**
		 * The proper noun designation for a place, natural feature, or political jurisdiction.
		 * @see https://music-encoding.org/guidelines/v5/elements/geogName.html
		 */
		geogName: v.optional(
			v.union([
				v.lazy(() => GeogNameSchema),
				v.array(v.lazy(() => GeogNameSchema)),
			]),
		),
	});

export type ModelNameLikeGeogNameData = {
	geogName?: GeogNameData | GeogNameData[];
};
