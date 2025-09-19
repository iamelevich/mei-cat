import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrAuthorizedSchema } from "../attr/authorized";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { ModelTextPhraseLikeSchema } from "../model/textPhraseLike";

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
export const IdentifierSchema = v.lazy(() =>
	v.intersect([
		IdentifierBaseSchema,
		ModelEditLikeSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type IdentifierData = v.InferOutput<typeof IdentifierSchema>;
