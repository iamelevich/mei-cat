import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrDataPointingSchema } from "../attr/dataPointing";
import { AttrLangSchema } from "../attr/lang";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for TermSchema
 */
const TermBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Keyword or phrase which describes a resource.
 * @see https://music-encoding.org/guidelines/v5/elements/term.html
 */
export const TermSchema = v.lazy(() =>
	v.intersect([TermBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type TermData = v.InferOutput<typeof TermSchema>;
