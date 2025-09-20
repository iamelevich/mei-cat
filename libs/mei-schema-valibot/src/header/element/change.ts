import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDatableSchema } from "../../shared/attr/datable";
import { RespStmtSchema } from "../../shared/element/respStmt";
import { ModelDateLikeSchema } from "../../shared/model/dateLike";
import { ChangeDescSchema } from "./changeDesc";

/**
 * Base schema with attribute, to simplify types for ChangeSchema
 */
const ChangeBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDatableSchema.entries,
});

/**
 * Individual change within the revision description.
 * @see https://music-encoding.org/guidelines/v5/elements/change.html
 */
export const ChangeSchema = v.lazy(() =>
	v.intersect([
		ChangeBaseSchema,
		v.object({
			/**
			 * Reference to element changeDesc
			 * @see https://music-encoding.org/guidelines/v5/elements/changeDesc.html
			 */
			changeDesc: v.optional(ChangeDescSchema),
			/**
			 * Reference to element respStmt
			 * @see https://music-encoding.org/guidelines/v5/elements/respStmt.html
			 */
			respStmt: v.optional(RespStmtSchema),
		}),
		ModelDateLikeSchema,
	]),
);

export type ChangeData = v.InferOutput<typeof ChangeSchema>;
