import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { RespStmtSchema } from "../../shared/element/respStmt";
import { ModelEditionLikeSchema } from "../../shared/model/editionLike";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { ModelRespLikePartSchema } from "../../shared/model/respLikePart";

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
export const EditionStmtSchema = v.lazy(() =>
	v.intersect([
		EditionStmtBaseSchema,
		v.object({
			/**
			 * Reference to element respStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
			 */
			respStmt: v.union([RespStmtSchema, v.array(RespStmtSchema)]),
		}),
		ModelEditionLikeSchema,
		ModelHeadLikeSchema,
		ModelRespLikePartSchema,
	]),
);

export type EditionStmtData = v.InferOutput<typeof EditionStmtSchema>;
