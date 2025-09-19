import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrEvidenceSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for FunderSchema
 */
const FunderBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEvidenceSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Names of individuals, institutions, or organizations responsible for funding. Funders provide financial support for a project; they are distinct from sponsors, who provide intellectual support and authority.
 * @see https://music-encoding.org/guidelines/v5/elements/funder.html
 */
export const FunderSchema = v.intersect([
	FunderBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type FunderData = v.InferOutput<typeof FunderSchema>;
