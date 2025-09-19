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
 * Base schema with attribute, to simplify types for ComposerSchema
 */
const ComposerBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEvidenceSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * The name of the creator of the intellectual content of a musical work.
 * @see https://music-encoding.org/guidelines/v5/elements/composer.html
 */
export const ComposerSchema = v.intersect([
	ComposerBaseSchema,
	ModelTextPhraseLikeLimitedSchema,
]);

export type ComposerData = v.InferOutput<typeof ComposerSchema>;
