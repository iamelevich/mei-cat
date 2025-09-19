import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrEvidenceSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for ContributorSchema
 */
const ContributorBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEvidenceSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,

	// Direct attributes
	/**
	 * Used to specify the contributor’s function.
	 */
	"@role": v.optional(v.string()),
});

/**
 * Names of individuals, institutions, or organizations responsible for contributions to the intellectual content of a work, where the specialized elements for authors, editors, etc. do not suffice or do not apply.
 * @see https://music-encoding.org/guidelines/v5/elements/contributor.html
 */
export const ContributorSchema = v.intersect([
	ContributorBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type ContributorData = v.InferOutput<typeof ContributorSchema>;
