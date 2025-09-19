import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrDataPointingSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

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
export const TermSchema = v.intersect([
	TermBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type TermData = v.InferOutput<typeof TermSchema>;
