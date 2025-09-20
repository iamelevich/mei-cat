import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelPLikeSchema } from "../../shared/model/pLike";
import { ModelPhysDescPartSchema } from "../model/physDescPart";

/**
 * Base schema with attribute, to simplify types for PhysDescSchema
 */
const PhysDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Container for information about the appearance, construction, or handling of physical materials, such as their dimension, quantity, color, style, and technique of creation.
 * @see https://music-encoding.org/guidelines/v5/elements/physDesc.html
 */
export const PhysDescSchema = v.lazy(() =>
	v.intersect([
		PhysDescBaseSchema,
		ModelHeadLikeSchema,
		ModelPhysDescPartSchema,
		ModelPLikeSchema,
	]),
);

export type PhysDescData = v.InferOutput<typeof PhysDescSchema>;
