import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	ModelRespLikePartSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for BylineSchema
 */
const BylineBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Contains the primary statement of responsibility given for a work on its title page.
 * @see https://music-encoding.org/guidelines/v5/elements/byline.html
 */
export const BylineSchema = v.intersect([
	BylineBaseSchema,
	ModelRespLikePartSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type BylineData = v.InferOutput<typeof BylineSchema>;
