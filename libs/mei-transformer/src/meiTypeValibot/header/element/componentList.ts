import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, ModelHeadLikeSchema } from "../../shared";
import {
	ModelExpressionLikeSchema,
	ModelItemLikeSchema,
	ModelManifestationLikeSchema,
} from "../../frbr";
import { ModelWorkLikeSchema } from "..";

/**
 * Base schema with attribute, to simplify types for ComponentListSchema
 */
const ComponentListBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Container for intellectual or physical component parts of a bibliographic entity.
 * @see https://music-encoding.org/guidelines/v5/elements/componentList.html
 */
export const ComponentListSchema = v.intersect([
	ComponentListBaseSchema,
	ModelExpressionLikeSchema,
	ModelHeadLikeSchema,
	ModelItemLikeSchema,
	ModelManifestationLikeSchema,
	ModelWorkLikeSchema,
]);

export type ComponentListData = v.InferOutput<typeof ComponentListSchema>;
