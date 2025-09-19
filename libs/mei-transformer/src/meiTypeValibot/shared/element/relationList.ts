import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	ModelHeadLikeSchema,
	ModelRelationLikeSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for RelationListSchema
 */
const RelationListBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Gathers relation elements.
 * @see https://music-encoding.org/guidelines/v5/elements/relationList.html
 */
export const RelationListSchema = v.intersect([
	RelationListBaseSchema,
	ModelHeadLikeSchema,
	ModelRelationLikeSchema,
]);

export type RelationListData = v.InferOutput<typeof RelationListSchema>;
