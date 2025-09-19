import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrLangSchema } from "../attr/lang";
import { AttrQuantitySchema } from "../attr/quantity";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for ExtentSchema
 */
const ExtentBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrQuantitySchema.entries,
});

/**
 * Used to express size in terms other than physical dimensions, such as number of pages, records, bytes, physical components, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/extent.html
 */
export const ExtentSchema = v.lazy(() =>
	v.intersect([ExtentBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type ExtentData = v.InferOutput<typeof ExtentSchema>;
