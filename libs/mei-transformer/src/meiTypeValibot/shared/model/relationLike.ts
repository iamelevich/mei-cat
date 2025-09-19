import * as v from "valibot";
import {
	type RelationData,
	RelationSchema,
	type RelationListData,
	RelationListSchema,
} from "..";

/**
 * Collects elements that express a relationship.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.relationLike.html
 */
export const ModelRelationLikeSchema: v.GenericSchema<ModelRelationLikeData> =
	v.object({
		/**
		 * Describes a relationship or linkage amongst entities.
		 * @see https://music-encoding.org/guidelines/v5/elements/relation.html
		 */
		relation: v.optional(
			v.union([
				v.lazy(() => RelationSchema),
				v.array(v.lazy(() => RelationSchema)),
			]),
		),
		/**
		 * Gathers relation elements.
		 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
		 */
		relationList: v.optional(
			v.union([
				v.lazy(() => RelationListSchema),
				v.array(v.lazy(() => RelationListSchema)),
			]),
		),
	});

export type ModelRelationLikeData = {
	relation?: RelationData | RelationData[];
	relationList?: RelationListData | RelationListData[];
};
