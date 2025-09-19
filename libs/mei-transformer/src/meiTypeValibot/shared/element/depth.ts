import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrQuantitySchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for DepthSchema
 */
const DepthBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
	...AttrQuantitySchema.entries,
});

/**
 * Description of a measurement taken through a three-dimensional object.
 * @see https://music-encoding.org/guidelines/v5/elements/depth.html
 */
export const DepthSchema = v.intersect([
	DepthBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type DepthData = v.InferOutput<typeof DepthSchema>;
