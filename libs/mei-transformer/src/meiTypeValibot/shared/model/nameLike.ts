import * as v from "valibot";
import {
	type ModelNameLikeAgentData,
	ModelNameLikeAgentSchema,
} from "../../namesdates/model/nameLike.agent";
import {
	type ModelNameLikePlaceData,
	ModelNameLikePlaceSchema,
} from "../../namesdates/model/nameLike.place";
import { type NameData, NameSchema } from "../element/name";

/**
 * Groups elements that contain names.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.nameLike.html
 */
export const ModelNameLikeSchema: v.GenericSchema<ModelNameLikeData> = v.lazy(
	() =>
		v.intersect([
			v.object({
				/**
				 * Proper noun or noun phrase.
				 * @see https://music-encoding.org/guidelines/v5/elements/name.html
				 */
				name: v.optional(v.union([NameSchema, v.array(NameSchema)])),
			}),
			ModelNameLikeAgentSchema,
			ModelNameLikePlaceSchema,
		]),
);

export type ModelNameLikeData = {
	name?: NameData | NameData[];
} & ModelNameLikeAgentData &
	ModelNameLikePlaceData;
