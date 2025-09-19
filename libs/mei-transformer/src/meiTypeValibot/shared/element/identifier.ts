import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrAuthorizedSchema,
	AttrBiblSchema,
	AttrCommonSchema,
	ModelTextPhraseLikeSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

/**
 * Base schema with attribute, to simplify types for IdentifierSchema
 */
const IdentifierBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * An alpha-numeric string that establishes the identity of the described material.
 * @see https://music-encoding.org/guidelines/v5/elements/identifier.html
 */
export const IdentifierSchema = v.intersect([
	IdentifierBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type IdentifierData = v.InferOutput<typeof IdentifierSchema>;
