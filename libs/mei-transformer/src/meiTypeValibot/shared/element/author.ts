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
 * Base schema with attribute, to simplify types for AuthorSchema
 */
const AuthorBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEvidenceSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * The name of the creator of the intellectual content of a non-musical, literary work.
 * @see https://music-encoding.org/guidelines/v5/elements/author.html
 */
export const AuthorSchema = v.intersect([
	AuthorBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type AuthorData = v.InferOutput<typeof AuthorSchema>;
