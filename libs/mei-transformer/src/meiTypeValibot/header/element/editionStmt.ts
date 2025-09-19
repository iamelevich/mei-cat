import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	AttrLangSchema,
	ModelEditionLikeSchema,
	ModelHeadLikeSchema,
	ModelRespLikePartSchema,
	RespStmtSchema,
} from "../../shared";

/**
 * Base schema with attribute, to simplify types for EditionStmtSchema
 */
const EditionStmtBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Container for meta-data pertaining to a particular edition of the material being described.
 * @see https://music-encoding.org/guidelines/v5/elements/editionStmt.html
 */
export const EditionStmtSchema = v.intersect([
	EditionStmtBaseSchema,
	v.object({
		/**
		 * Reference to element respStmt
		 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
		 */
		respStmt: v.union([
			v.lazy(() => RespStmtSchema),
			v.array(v.lazy(() => RespStmtSchema)),
		]),
	}),
	ModelEditionLikeSchema,
	ModelHeadLikeSchema,
	ModelRespLikePartSchema,
]);

export type EditionStmtData = v.InferOutput<typeof EditionStmtSchema>;
