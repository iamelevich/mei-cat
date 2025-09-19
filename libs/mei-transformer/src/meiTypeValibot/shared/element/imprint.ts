import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { RespStmtSchema } from "../element/respStmt";
import { ModelImprintPartSchema } from "../model/imprintPart";
import { ModelTextPhraseLikeSchema } from "../model/textPhraseLike";

/**
 * Base schema with attribute, to simplify types for ImprintSchema
 */
const ImprintBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * Information relating to the publication or distribution of a bibliographic item.
 * @see https://music-encoding.org/guidelines/v5/elements/imprint.html
 */
export const ImprintSchema = v.lazy(() =>
	v.intersect([
		ImprintBaseSchema,
		v.object({
			/**
			 * Reference to element respStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
			 */
			respStmt: v.optional(v.union([v.array(RespStmtSchema), RespStmtSchema])),
		}),
		ModelImprintPartSchema,
		ModelTextPhraseLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type ImprintData = v.InferOutput<typeof ImprintSchema>;
