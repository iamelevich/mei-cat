import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { AttrQuantitySchema } from "../attr/quantity";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

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
export const DepthSchema = v.lazy(() =>
	v.intersect([DepthBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type DepthData = v.InferOutput<typeof DepthSchema>;
