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
 * Base schema with attribute, to simplify types for DimSchema
 */
const DimBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
	...AttrQuantitySchema.entries,

	// Direct attributes
	/**
	 * Aspect of the object being measured.
	 */
	"@form": v.optional(v.string()),
});

/**
 * Any single dimensional specification.
 * @see https://music-encoding.org/guidelines/v5/elements/dim.html
 */
export const DimSchema = v.intersect([
	DimBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type DimData = v.InferOutput<typeof DimSchema>;
