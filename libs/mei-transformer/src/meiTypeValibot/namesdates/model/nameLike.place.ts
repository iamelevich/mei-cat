import * as v from "valibot";
import {
	type ModelRepositoryLikeData,
	ModelRepositoryLikeSchema,
} from "../../shared";
import {
	type ModelNameLikeGeogNameData,
	ModelNameLikeGeogNameSchema,
} from "..";

/**
 * Groups place name elements.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.nameLike.place.html
 */
export const ModelNameLikePlaceSchema: v.GenericSchema<ModelNameLikePlaceData> =
	v.intersect([ModelNameLikeGeogNameSchema, ModelRepositoryLikeSchema]);

export type ModelNameLikePlaceData = ModelNameLikeGeogNameData &
	ModelRepositoryLikeData;
