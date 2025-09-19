import * as v from "valibot";
import {
	type ModelRepositoryLikeData,
	ModelRepositoryLikeSchema,
} from "../../shared/model/repositoryLike";
import {
	type ModelNameLikeGeogNameData,
	ModelNameLikeGeogNameSchema,
} from "../model/nameLike.geogName";

/**
 * Groups place name elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.nameLike.place.html
 */
export const ModelNameLikePlaceSchema: v.GenericSchema<ModelNameLikePlaceData> =
	v.lazy(() =>
		v.intersect([ModelNameLikeGeogNameSchema, ModelRepositoryLikeSchema]),
	);

export type ModelNameLikePlaceData = ModelNameLikeGeogNameData &
	ModelRepositoryLikeData;
