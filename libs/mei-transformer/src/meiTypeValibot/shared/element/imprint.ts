import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	ModelImprintPartSchema,
	ModelTextPhraseLikeSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import { ModelTranscriptionLikeSchema } from "../../edittrans";
import { RespStmtSchema } from ".";

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
export const ImprintSchema = v.intersect([
	ImprintBaseSchema,
	v.object({
		/**
		 * Reference to element respStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
		 */
		respStmt: v.optional(
			v.union([
				v.lazy(() => RespStmtSchema),
				v.array(v.lazy(() => RespStmtSchema)),
			]),
		),
	}),
	ModelImprintPartSchema,
	ModelTextPhraseLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type ImprintData = v.InferOutput<typeof ImprintSchema>;
