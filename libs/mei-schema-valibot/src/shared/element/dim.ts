import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { AttrQuantitySchema } from "../attr/quantity";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

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
export const DimSchema = v.lazy(() =>
	v.intersect([DimBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type DimData = v.InferOutput<typeof DimSchema>;
