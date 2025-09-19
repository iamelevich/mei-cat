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
 * Base schema with attribute, to simplify types for LibrettistSchema
 */
const LibrettistBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEvidenceSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Person or organization who is a writer of the text of an opera, oratorio, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/librettist.html
 */
export const LibrettistSchema = v.intersect([
	LibrettistBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type LibrettistData = v.InferOutput<typeof LibrettistSchema>;
