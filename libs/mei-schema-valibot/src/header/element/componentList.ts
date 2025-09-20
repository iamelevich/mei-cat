import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelExpressionLikeSchema } from "../../frbr/model/expressionLike";
import { ModelItemLikeSchema } from "../../frbr/model/itemLike";
import { ModelManifestationLikeSchema } from "../../frbr/model/manifestationLike";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelWorkLikeSchema } from "../model/workLike";

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
export const ComponentListSchema = v.lazy(() =>
	v.intersect([
		ComponentListBaseSchema,
		ModelExpressionLikeSchema,
		ModelHeadLikeSchema,
		ModelItemLikeSchema,
		ModelManifestationLikeSchema,
		ModelWorkLikeSchema,
	]),
);

export type ComponentListData = v.InferOutput<typeof ComponentListSchema>;
