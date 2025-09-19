import * as v from "valibot";
import { type NameData, NameSchema } from "..";
import {
	type ModelNameLikeAgentData,
	ModelNameLikeAgentSchema,
	type ModelNameLikePlaceData,
	ModelNameLikePlaceSchema,
} from "../../namesdates";

/**
 * Groups elements that contain names.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.nameLike.html
 */
export const ModelNameLikeSchema: v.GenericSchema<ModelNameLikeData> =
	v.intersect([
		v.object({
			/**
			 * Proper noun or noun phrase.
			 * @see https://music-encoding.org/guidelines/v5/elements/name.html
			 */
			name: v.optional(
				v.union([v.lazy(() => NameSchema), v.array(v.lazy(() => NameSchema))]),
			),
		}),
		ModelNameLikeAgentSchema,
		ModelNameLikePlaceSchema,
	]);

export type ModelNameLikeData = {
	name?: NameData | NameData[];
} & ModelNameLikeAgentData &
	ModelNameLikePlaceData;
