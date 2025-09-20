import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { AttrQuantitySchema } from "../attr/quantity";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for WidthSchema
 */
const WidthBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
	...AttrQuantitySchema.entries,
});

/**
 * Description of the horizontal size of an object.
 * @see https://music-encoding.org/guidelines/v5/elements/width.html
 */
export const WidthSchema = v.lazy(() =>
	v.intersect([WidthBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type WidthData = v.InferOutput<typeof WidthSchema>;
