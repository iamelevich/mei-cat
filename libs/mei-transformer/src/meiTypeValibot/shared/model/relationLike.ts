import * as v from "valibot";
import { type RelationData, RelationSchema } from "../element/relation";
import {
	type RelationListData,
	RelationListSchema,
} from "../element/relationList";

/**
 * Collects elements that express a relationship.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.relationLike.html
 */
export const ModelRelationLikeSchema: v.GenericSchema<ModelRelationLikeData> =
	v.lazy(() =>
		v.object({
			/**
			 * Describes a relationship or linkage amongst entities.
			 * @see https://music-encoding.org/guidelines/v5/elements/relation.html
			 */
			relation: v.optional(v.union([v.array(RelationSchema), RelationSchema])),
			/**
			 * Gathers relation elements.
			 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
			 */
			relationList: v.optional(
				v.union([v.array(RelationListSchema), RelationListSchema]),
			),
		}),
	);

export type ModelRelationLikeData = {
	relation?: RelationData | RelationData[];
	relationList?: RelationListData | RelationListData[];
};
