import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for GenreSchema
 */
const GenreBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Term or terms that designate a category characterizing a particular style, form, or content.
 * @see https://music-encoding.org/guidelines/v5/elements/genre.html
 */
export const GenreSchema = v.intersect([
	GenreBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type GenreData = v.InferOutput<typeof GenreSchema>;
