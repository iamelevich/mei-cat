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
 * Base schema with attribute, to simplify types for HeightSchema
 */
const HeightBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
	...AttrQuantitySchema.entries,
});

/**
 * Description of the vertical size of an object.
 * @see https://music-encoding.org/guidelines/v5/elements/height.html
 */
export const HeightSchema = v.intersect([
	HeightBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type HeightData = v.InferOutput<typeof HeightSchema>;
