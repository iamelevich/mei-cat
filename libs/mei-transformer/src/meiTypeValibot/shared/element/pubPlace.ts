import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for PubPlaceSchema
 */
const PubPlaceBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Name of the place where a bibliographic item was published.
 * @see https://music-encoding.org/guidelines/v5/elements/pubPlace.html
 */
export const PubPlaceSchema = v.intersect([
	PubPlaceBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type PubPlaceData = v.InferOutput<typeof PubPlaceSchema>;
