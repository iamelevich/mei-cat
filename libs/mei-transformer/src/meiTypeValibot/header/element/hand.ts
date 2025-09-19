import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrEvidenceSchema } from "../../shared/attr/evidence";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrMediumSchema } from "../../shared/attr/medium";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";

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
export const HandSchema = v.lazy(() =>
	v.intersect([HandBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type HandData = v.InferOutput<typeof HandSchema>;
