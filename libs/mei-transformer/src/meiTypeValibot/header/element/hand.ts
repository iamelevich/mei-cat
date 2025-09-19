import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrEvidenceSchema,
	AttrLangSchema,
	AttrMediumSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for HandSchema
 */
const HandBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEvidenceSchema.entries,
	...AttrLangSchema.entries,
	...AttrMediumSchema.entries,

	// Direct attributes
	/**
	 * Marks this hand as the first one of the document.
	 */
	"@initial": v.optional(v.string()),
});

/**
 * Defines a distinct scribe or handwriting style.
 * @see https://music-encoding.org/guidelines/v5/elements/hand.html
 */
export const HandSchema = v.intersect([
	HandBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type HandData = v.InferOutput<typeof HandSchema>;
